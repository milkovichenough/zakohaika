from aiogram import F, Router
from aiogram.fsm.context import FSMContext
from aiogram.types import Message

from data.settings import ADMINS
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
    photo_file_id = message.photo[-1].file_id
    data = await state.get_data()
    formatted_text = []
    [
        formatted_text.append(f"{value}")
        for key, value in data.items()
    ]
    await state.clear()
    await message.answer(f"Заявка відправлена на модерацію. Очікуйте зворотнього за'язку. Ваша заявка:")
    await message.answer_photo(photo_file_id, "\n\n".join(formatted_text))

    for admin in ADMINS:
        await message.answer("Надійшла нова заявка. Перевірте адмінку сайта.")
        await message.answer_photo(photo_file_id, "\n\n".join(formatted_text))
