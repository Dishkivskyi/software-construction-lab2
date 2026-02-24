// Клас Вірус, що реалізує глибоке копіювання
class Virus {
    constructor(
        public name: string,
        public type: string,
        public strength: number,
        public age: number,
        public children: Virus[] = [] // Список дочірніх вірусів
    ) {}

    // Метод для клонування (Prototype)
    public clone(): Virus {
        // Глибоке копіювання: створюємо нові екземпляри для всіх дітей
        const clonedChildren = this.children.map(child => child.clone());

        return new Virus(
            this.name + " (клон)",
            this.type,
            this.strength,
            this.age,
            clonedChildren
        );
    }

    public getInfo(indent: string = ""): string {
        let info = `${indent}Вірус: ${this.name} [Тип: ${this.type}, Сила: ${this.strength}]\n`;
        this.children.forEach(child => {
            info += child.getInfo(indent + "  ");
        });
        return info;
    }
}

function main() {
    console.log("=== ЗАВДАННЯ 4: ПРОТОТИП (ГЛИБОКЕ КЛОНУВАННЯ) ===\n");

    // 1. Створюємо ієрархію вірусів
    const child1 = new Virus("Дельта", "Корона", 50, 1);
    const child2 = new Virus("Омікрон", "Корона", 40, 1);
    const parentVirus = new Virus("SARS-CoV-2", "Корона", 100, 2, [child1, child2]);

    // 2. Клонуємо батьківський вірус
    const clonedVirus = parentVirus.clone();

    // 3. Змінюємо дані в оригіналі, щоб перевірити незалежність клону
    parentVirus.name = "ОРИГІНАЛ ЗМІНЕНО";
    parentVirus.children[0].name = "ЗМІНЕНА ДЕЛЬТА";

    console.log("--- Оригінальний вірус (після змін) ---");
    console.log(parentVirus.getInfo());

    console.log("--- Клонований вірус (має залишитися старим) ---");
    console.log(clonedVirus.getInfo());
}

main();