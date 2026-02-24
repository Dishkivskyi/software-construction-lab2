// 1. Інтерфейси для девайсів
interface Laptop { getInfo(): string; }
interface Netbook { getInfo(): string; }
interface EBook { getInfo(): string; }
interface Smartphone { getInfo(): string; }

// 2. Реалізація продуктів для бренду IProne
class IProneLaptop implements Laptop { getInfo = () => "IProne Laptop Air (M3)"; }
class IProneNetbook implements Netbook { getInfo = () => "IProne Netbook Lite"; }
class IProneEBook implements EBook { getInfo = () => "IProne E-Reader Classic"; }
class IProneSmartphone implements Smartphone { getInfo = () => "IProne 15 Pro Max"; }

// 3. Реалізація продуктів для бренду Kiaomi
class KiaomiLaptop implements Laptop { getInfo = () => "Kiaomi Mi Notebook Pro"; }
class KiaomiNetbook implements Netbook { getInfo = () => "Kiaomi Redmi Book Plus"; }
class KiaomiEBook implements EBook { getInfo = () => "Kiaomi Mi Reader Touch"; }
class KiaomiSmartphone implements Smartphone { getInfo = () => "Kiaomi 14 Ultra"; }

// 4. Реалізація продуктів для бренду Balaxy
class BalaxyLaptop implements Laptop { getInfo = () => "Balaxy Book 4 Ultra"; }
class BalaxyNetbook implements Netbook { getInfo = () => "Balaxy Go LTE"; }
class BalaxyEBook implements EBook { getInfo = () => "Balaxy Paper E-Ink"; }
class BalaxySmartphone implements Smartphone { getInfo = () => "Balaxy S24 Ultra"; }

// 5. Абстрактна фабрика
interface DeviceFactory {
    createLaptop(): Laptop;
    createNetbook(): Netbook;
    createEBook(): EBook;
    createSmartphone(): Smartphone;
}

// 6. Конкретні фабрики брендів
class IProneFactory implements DeviceFactory {
    createLaptop = () => new IProneLaptop();
    createNetbook = () => new IProneNetbook();
    createEBook = () => new IProneEBook();
    createSmartphone = () => new IProneSmartphone();
}

class KiaomiFactory implements DeviceFactory {
    createLaptop = () => new KiaomiLaptop();
    createNetbook = () => new KiaomiNetbook();
    createEBook = () => new KiaomiEBook();
    createSmartphone = () => new KiaomiSmartphone();
}

class BalaxyFactory implements DeviceFactory {
    createLaptop = () => new BalaxyLaptop();
    createNetbook = () => new BalaxyNetbook();
    createEBook = () => new BalaxyEBook();
    createSmartphone = () => new BalaxySmartphone();
}

function main() {
    console.log("=== ЗАВДАННЯ 2: АБСТРАКТНА ФАБРИКА ===\n");
    const factories: DeviceFactory[] = [new IProneFactory(), new KiaomiFactory(), new BalaxyFactory()];
    factories.forEach(f => {
        console.log(`Продукція бренду:`);
        console.log(`- ${f.createLaptop().getInfo()}`);
        console.log(`- ${f.createSmartphone().getInfo()}`);
        console.log(`- ${f.createNetbook().getInfo()}`);
        console.log(`- ${f.createEBook().getInfo()}\n`);
    });
}
main();