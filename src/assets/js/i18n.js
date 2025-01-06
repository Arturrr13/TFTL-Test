import en from '../i18n/en.json'
import ua from '../i18n/ua.json'
import ru from '../i18n/ru.json'

import { createI18n } from 'vue-i18n'

const createi18n = () => {
    const i18n = createI18n({
		locale: 'en',
        legacy: false,
        messages: {
            'en': en,
            'ua': ua,
            'ru': ru
        }
    })
    return i18n
}

export default createi18n