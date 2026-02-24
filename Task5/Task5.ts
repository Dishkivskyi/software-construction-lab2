// 1. Клас Продукту
class Character {
    public inventory: string[] = [];
    public actions: string[] = [];

    constructor(
        public name: string,
        public height: number,
        public build: string,
        public hairColor: string,
        public eyeColor: string
    ) {}

    public toString(): string {
        return `Персонаж: ${this.name}\n` +
            `Характеристики: ${this.height}см, ${this.build}, волосся: ${this.hairColor}, очі: ${this.eyeColor}\n` +
            `Спорядження: ${this.inventory.join(", ") || "немає"}\n` +
            `Історія дій: ${this.actions.join(", ")}\n`;
    }
}

// 2. Інтерфейс Будівельника (Fluent Interface)
interface ICharacterBuilder {
    setName(name: string): this;
    setAppearance(height: number, build: string, hair: string, eyes: string): this;
    addItem(item: string): this;
    addAction(action: string): this;
    build(): Character;
}

// 3. Конкретний Будівельник для Героїв
class HeroBuilder implements ICharacterBuilder {
    private name: string = "";
    private height: number = 0;
    private buildType: string = "";
    private hair: string = "";
    private eyes: string = "";
    private inventory: string[] = [];
    private actions: string[] = [];

    setName(name: string): this { this.name = name; return this; }
    setAppearance(h: number, b: string, ha: string, e: string): this {
        this.height = h; this.buildType = b; this.hair = ha; this.eyes = e;
        return this;
    }
    addItem(item: string): this { this.inventory.push(item); return this; }
    addAction(action: string): this { this.actions.push("Героїчний вчинок: " + action); return this; }
    build(): Character {
        const char = new Character(this.name, this.height, this.buildType, this.hair, this.eyes);
        char.inventory = this.inventory;
        char.actions = this.actions;
        return char;
    }
}

// 4. Конкретний Будівельник для Ворогів
class EnemyBuilder implements ICharacterBuilder {
    private name: string = "";
    private height: number = 0;
    private buildType: string = "";
    private hair: string = "";
    private eyes: string = "";
    private inventory: string[] = [];
    private actions: string[] = [];

    setName(name: string): this { this.name = name; return this; }
    setAppearance(h: number, b: string, ha: string, e: string): this {
        this.height = h; this.buildType = b; this.hair = ha; this.eyes = e;
        return this;
    }
    addItem(item: string): this { this.inventory.push(item); return this; }
    addAction(action: string): this { this.actions.push("Злочин: " + action); return this; }
    build(): Character {
        const char = new Character(this.name, this.height, this.buildType, this.hair, this.eyes);
        char.inventory = this.inventory;
        char.actions = this.actions;
        return char;
    }
}

// 5. Клас Директор
class GameDirector {
    public constructPaladin(builder: ICharacterBuilder): Character {
        return builder
            .setName("Артур")
            .setAppearance(190, "Мускулистий", "Блонд", "Блакитні")
            .addItem("Святий Меч")
            .addItem("Сталевий Обладунок")
            .addAction("Врятував принцесу")
            .build();
    }

    public constructDarkLord(builder: ICharacterBuilder): Character {
        return builder
            .setName("Моргот")
            .setAppearance(210, "Худорлявий", "Чорне", "Червоні")
            .addItem("Посох Хаосу")
            .addAction("Зруйнував фортецю")
            .build();
    }
}

// Головний метод
function main() {
    console.log("=== ЗАВДАННЯ 5: БУДІВЕЛЬНИК ===\n");
    const director = new GameDirector();

    const hero = director.constructPaladin(new HeroBuilder());
    const enemy = director.constructDarkLord(new EnemyBuilder());

    console.log(hero.toString());
    console.log(enemy.toString());
}
main();