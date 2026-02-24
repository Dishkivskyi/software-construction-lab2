class Authenticator {
    // 1. Статичне поле для зберігання єдиного екземпляру
    private static instance: Authenticator | null = null;

    // 2. ПРИВАТНИЙ конструктор, щоб не можна було зробити new Authenticator() зовні
    private constructor() {
        console.log("Клас Authenticator ініціалізовано (лише один раз!)");
    }

    // 3. Статичний метод для отримання доступу до екземпляру
    public static getInstance(): Authenticator {
        if (Authenticator.instance === null) {
            Authenticator.instance = new Authenticator();
        }
        return Authenticator.instance;
    }

    public login(user: string): void {
        console.log(`Користувач ${user} успішно увійшов у систему.`);
    }
}

// 4. Головний метод для перевірки (Пункт 3 завдання)
function main() {
    console.log("=== ЗАВДАННЯ 3: ОДИНАК (SINGLETON) ===\n");

    // Спробуємо отримати екземпляр два рази
    const auth1 = Authenticator.getInstance();
    const auth2 = Authenticator.getInstance();

    auth1.login("Олександр");

    // Перевірка, чи це дійсно один і той самий об'єкт у пам'яті
    console.log("\nПеревірка ідентичності:");
    if (auth1 === auth2) {
        console.log("Результат: Об'єкти ідентичні. Патерн Singleton працює правильно.");
    } else {
        console.log("Помилка: Об'єкти різні!");
    }
}

main();