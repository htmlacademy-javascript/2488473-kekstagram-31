
const toMinute = (time) => {
    return parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]);

    /* Пояснение к {return}
        1. Сначало делю на массив через ключ :
        2. Умножаю на 60 (превращаю в минуты)
        3. Добавляю минуты

        {parseInt} используя для превращения 05 или 08 часа в 5 и 8 соотвествтенно
    */
};

const checkWorkDay = (start, stop, meet, meetTime) => {
    const startSplit = toMinute(start);
    const stopSplit = toMinute(stop);
    const meetSplitSum = toMinute(meet);

    if (!(meetSplitSum + meetTime <= startSplit)) {
        return (!(meetSplitSum + meetTime > stopSplit))
    }; return false;
};