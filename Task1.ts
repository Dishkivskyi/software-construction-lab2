// 1. Інтерфейс підписки (Продукт)
interface Subscription {
    monthlyFee: number;     // Щомісячна плата
    minPeriod: number;      // Мінімальний період
    channels: string[];     // Список каналів та можливостей
}

// 2. Конкретні класи підписок (Види підписок)
class DomesticSubscription implements Subscription {
    monthlyFee = 100;
    minPeriod = 1;
    channels = ["Базові канали", "Місцеві новини"]; //
}

class EducationalSubscription implements Subscription {
    monthlyFee = 50;
    minPeriod = 6;
    channels = ["Discovery", "National Geographic", "Наукові лекції"]; //
}

class PremiumSubscription implements Subscription {
    monthlyFee = 300;
    minPeriod = 1;
    channels = ["Всі канали", "4K контент", "Спортивні трансляції"]; //
}

// 3. Базовий клас творця (Провайдер) [cite: 14]
abstract class VideoProvider {
    // Фабричний метод [cite: 5]
    public abstract createSubscription(): Subscription;

    // Метод для відображення роботи [cite: 15]
    public showSubscriptionDetails(): void {
        const sub = this.createSubscription();
        console.log(`--- Деталі підписки ---`);
        console.log(`Ціна: ${sub.monthlyFee} грн/міс`);
        console.log(`Мін. період: ${sub.minPeriod} міс`);
        console.log(`Можливості: ${sub.channels.join(", ")}`);
        console.log('-----------------------\n');
    }
}

// 4. Класи для реалізації логіки створення (Конкретні творці)
class WebSite extends VideoProvider {
    public createSubscription(): Subscription {
        console.log("Оформлено через Web-сайт");
        return new DomesticSubscription();
    }
}

class MobileApp extends VideoProvider {
    public createSubscription(): Subscription {
        console.log("Оформлено через Мобільний додаток");
        return new EducationalSubscription();
    }
}

class ManagerCall extends VideoProvider {
    public createSubscription(): Subscription {
        console.log("Оформлено через Дзвінок менеджеру");
        return new PremiumSubscription();
    }
}

// 5. Головний метод програми (Запуск)
function main() {
    console.log("=== ЛАБОРАТОРНА РОБОТА №2: ЗАВДАННЯ 1 (ФАБРИЧНИЙ МЕТОД) ===\n");

    const providers: VideoProvider[] = [
        new WebSite(),
        new MobileApp(),
        new ManagerCall()
    ];

    providers.forEach(provider => {
        provider.showSubscriptionDetails();
    });
}

main();