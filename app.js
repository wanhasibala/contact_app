const contacts = require ('./contacts');

const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukkan nama anda :');
    const email = await contacts.tulisPertanyaan('Masukkan email anda : ');
    // const noHp = await contacts.tulisPertanyaan('Masukkan nomer HP anda : ');
    
    contacts.simpanContact(nama, email,);
};

main();