from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton
from aiogram.utils.keyboard import InlineKeyboardBuilder

from aiogram.filters.callback_data import CallbackData


class MessageInfo(CallbackData, prefix='message_info'):
    id_account: int
    flag: bool


def get_inline_answer(id_account):
    keyboard_builder = InlineKeyboardBuilder()
    keyboard_builder.button(text="Додати ✅",
                            callback_data=MessageInfo(id_account=id_account, flag=True).pack())
    keyboard_builder.button(text="Відхилити ❌",
                            callback_data=MessageInfo(id_account=id_account, flag=False).pack())

    return keyboard_builder.as_markup()