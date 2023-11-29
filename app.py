import asyncio

from aiogram import Bot, Dispatcher
from aiogram.filters import CommandStart
from aiogram.fsm.context import FSMContext
from aiogram.types import Message, CallbackQuery

from data.settings import TOKEN_API, ADMINS

bot = Bot(token=TOKEN_API, parse_mode='HTML')
dp = Dispatcher()


@dp.message(CommandStart())
async def start_bot(message: Message):
    text = f"Привіт, {message.from_user.full_name}. Вітаю в нашому боті!"
    await message.answer(text)


@dp.message()
async def echo(message: Message):
    await message.answer(message.text)


async def bot_start():
    for admin in ADMINS:
        await bot.send_message(admin, "Бот запущено!")
    try:
        await dp.start_polling(bot)
    finally:
        await bot.session.close()

if __name__ == "__main__":
    asyncio.run(bot_start())
