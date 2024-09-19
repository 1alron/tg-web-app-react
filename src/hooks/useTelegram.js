const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onClose = () => {
        tg.close();
    }

    const onToggleButton = () => {
        if (tg.BackButton.isVisible) {
            tg.BackButton.hide();
        } else {
            tg.BackButton.show();
        }
    }
    
    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}