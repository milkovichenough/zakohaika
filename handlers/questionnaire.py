import requests
from aiogram import F, Router
from aiogram.fsm.context import FSMContext
from aiogram.types import Message, CallbackQuery

from data.settings import ADMINS
from keyboards.inline import get_inline_answer, MessageInfo
from states.states import Form

router = Router()


@router.message(F.text == "Додати місце 🤭")
async def start_quest(message: Message, state: FSMContext):
    await state.set_state(Form.title)
    await message.answer(f"Для початку введіть назву вашого місця:")


@router.message(Form.title)
async def form_title(message: Message, state: FSMContext):
    await state.update_data(title=message.text)
    await state.set_state(Form.description)
    await message.answer(f"Супер, тепер напишіть опис:")


@router.message(Form.description)
async def form_title(message: Message, state: FSMContext):
    await state.update_data(description=message.text)
    await state.set_state(Form.photo)
    await message.answer(f"Далі відправте фото:")


@router.message(Form.photo)
async def form_title(message: Message, state: FSMContext):
    url_text = message.text
    await state.update_data(url_text=url_text)
    # photo_file_id = message.photo[-1].file_id
    data = await state.get_data()
    formatted_text = []
    [
        formatted_text.append(f"{value}")
        for key, value in data.items()
    ]

    await message.answer(f"Заявка відправлена на модерацію. Очікуйте зворотнього за'язку. Ваша заявка:")
    await message.answer(f"Назва: {data.get('title')}\n\nОпис: {data.get('description')}\nUrl фото: {url_text}")

    for admin in ADMINS:
        await message.answer("Надійшла нова заявка.")
        await message.answer(f"Назва: {data.get('title')}\n\nОпис: {data.get('description')}\nUrl фото: {url_text}",
                             reply_markup=get_inline_answer(message.chat.id))


@router.callback_query(MessageInfo.filter())
async def answer(call: CallbackQuery, callback_data: MessageInfo, state: FSMContext):
    data = await state.get_data()
    await state.clear()
    await call.message.delete()
    id_account = callback_data.id_account
    flag = callback_data.flag
    if flag:

        url = "https://8bf5-88-154-62-42.ngrok-free.app/places"
        data = {
            "description": f"{data.get('description')}",
            "title": f"{data.get('title')}",
            "photoUrl": f"{data.get('url_text')}"
        }
        response = requests.post(url, json=data)

        # Перевірка статус-коду та виведення відповіді
        if response.status_code == 200 or response.status_code == 201:
            print("Успішно відправлено POST-запит")
            await call.message.answer(f"Заявка успішно додана!")
        else:
            print(f"Помилка при відправці POST-запиту. Статус-код: {response.status_code}")
            await call.message.answer(f"Помилка при додаванні заявки")
    else:
        await call.message.answer(f"Ви відхилили заявку.")
