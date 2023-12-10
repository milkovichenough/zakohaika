import asyncio

from aiogram import Bot, Dispatcher
from aiogram.filters import CommandStart
from handlers import questionnaire
from aiogram.types import Message

from data.settings import TOKEN_API, ADMINS
from keyboards.quest import quest_keyboard

bot = Bot(token=TOKEN_API, parse_mode='HTML')
dp = Dispatcher()
dp.include_routers(
    questionnaire.router
)

@dp.message(CommandStart())
async def start_bot(message: Message):
    text = f"Привіт, {message.from_user.full_name}. Вітаю в нашому боті! За допомогою кнопки внизу ти можеш запропонувати своє місце для відпочинку і зустрічей! 🫶"
    await message.answer(text, reply_markup=quest_keyboard)

async def send_card_to_admins(photo_id, data):
    pass
async def bot_start():
    for admin in ADMINS:
        await bot.send_message(admin, "Бот запущено!")
    try:
        await dp.start_polling(bot)

    finally:
        await bot.session.close()


if __name__ == "__main__":
    asyncio.run(bot_start())
