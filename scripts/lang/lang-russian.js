
//lang.js
$.lang.data["net.phantombot.lang.not-exists"] = "!!! Отсутствует строка в языковом файле !!!";
$.lang.data["net.phantombot.lang.lang-not-exists"] = "Этот языковой файл не сущетсвует!";
$.lang.data["net.phantombot.lang.lang-changed"] = "Язык изменен на $1!";
$.lang.data["net.phantombot.lang.curlang"] = "Текущий язык $1!";

//common
$.lang.data["net.phantombot.common.enabled"] = "включен";
$.lang.data["net.phantombot.common.disabled"] = "выключен";
$.lang.data["net.phantombot.common.err-user"] = "Вы должны определить пользователя для этой команды";
$.lang.data["net.phantombot.common.user-404"] = "Пользователь \"$1\" ещё не посещал этот канал.";
$.lang.data["net.phantombot.common.whisper-disabled"] = "[Режим личных сообщений] был выключен.";
$.lang.data["net.phantombot.common.whisper-enabled"] = "[Режим личных сообщений] был включен.";

// To translate the ordinal number prefixes or suffixes, edit the lines below.
// Warning: Make sure each line contains 10 items total; 0 through 9.
// Order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].
$.lang.data["net.phantombot.common.ordinal-prefixes"] = ["","","","", "", "", "", "", "", ""];
$.lang.data["net.phantombot.common.ordinal-suffixes"] = ["-й,"-й","-й","-й", "-й", "-й", "-й", "-й", "-й", "-й"];

// To translate the time prefixes or suffixes, edit the lines below. This is used for both a single w/d/h/m and multiple w/d/h/m.
// Warning: Make sure each line contains 4 items total; w, d, h, m.
// Order: [w, d, h, m].
$.lang.data["net.phantombot.common.time-prefixes"] = ["","","",""];
$.lang.data["net.phantombot.common.time-suffixes"] = ["н","д","ч","м"];

//command perm/price
$.lang.data["net.phantombot.cmd.noperm"] = "Ваша пользовательская группа, $1, не имеет прав использовать комманду $2.";
$.lang.data["net.phantombot.cmd.needpoints"] = "Эта команда стоит $1, у Вас недостаточно средств.";
$.lang.data["net.phantombot.cmd.paid"] = "[Оплачено] $1 текущий баланс: $2";
$.lang.data["net.phantombot.cmd.casteronly"] = "Только владелец имеет доступ к этой команде!";
$.lang.data["net.phantombot.cmd.adminonly"] = "Только администратор имеет доступ к этой команде!";
$.lang.data["net.phantombot.cmd.modonly"] = "Только модератор имеет доступ к этой команде!";

//init.js
$.lang.data["net.phantombot.init.cmsgset"] = "Установлено сообщение при соединении!";
$.lang.data["net.phantombot.init.coolcom"] = "Восстановление команды доустпно через $1 секунд(ы)";
$.lang.data["net.phantombot.init.coolcom-set"] = "Восстановление команды теперь составляет $1 секунд(ы)!";
$.lang.data["net.phantombot.init.coolcom-cooldown"] = "Команда $1 отправленная $2 не была выполнена, потому что она все еще восстанавливается.";
$.lang.data["net.phantombot.init.reconn"] = "Переподключение запланировано!";
$.lang.data["net.phantombot.init.module-not-exists"] = "Этот модуль не существует или не загружен!";
$.lang.data["net.phantombot.init.module-usage"] = "Использование: !module list, !module enable <название модуля>, !module disable <название модуля>, !module status <название модуля>";
$.lang.data["net.phantombot.init.module-enable"] = "Модуль включен!";
$.lang.data["net.phantombot.init.module-disable"] = "Модуль выключен!";
$.lang.data["net.phantombot.init.module-enabled"] = "Модуль $1 в данный момент включен!";
$.lang.data["net.phantombot.init.module-disabled"] = "Модуль $1 в данный момент выключен!";
$.lang.data["net.phantombot.init.module-list"] = "Модули: ";

//misc.js
$.lang.data["net.phantombot.misc.log-status"] = "Логгирование сейчас $1! Логи хранятся в течение $2 дней! Для изменения этих параметров используйте '!log <enable или disable>' or '!log days <количество дней>'";
$.lang.data["net.phantombot.misc.log-enable"] = "Запись логов включена!";
$.lang.data["net.phantombot.misc.log-disable"] = "Запись логов выключена!";
$.lang.data["net.phantombot.misc.logchat-enable"] = "Запись логов чата включена!";
$.lang.data["net.phantombot.misc.logchat-disable"] = "Запись логов чата выключена!";
$.lang.data["net.phantombot.misc.log-err-bad-days"] = "Пожалуйста, введите действительное число дней больше 0. Использование: '!log days <количество дней>'";
$.lang.data["net.phantombot.misc.log-days"] = "Теперь логи хранятся в течение $1 дней!";
$.lang.data["net.phantombot.misc.response-enabled"] = "Ответы бота включены для всех. Для их выключения, напишите: !response disable";
$.lang.data["net.phantombot.misc.response-disabled"] = "Ответы бота выключены для всех. Для их включения, напишите: !response enable";
$.lang.data["net.phantombot.misc.response-enable"] = "Теперь ответы включены! Чтобы выключить их, напишите: !response disable";
$.lang.data["net.phantombot.misc.response-disable"] = "Теперь ответы выключены! Чтобы их включить, напишите: !response enable";

//permissions.js
$.lang.data["net.phantombot.permissions.group-not-exists"] = "Такой группы не существует! Для просмотра списка групп используйте !group list.";
$.lang.data["net.phantombot.permissions.group-remove"] = "Группа $1 была удалена. Все участники этой группы были перемещены в группу Viewers.";
$.lang.data["net.phantombot.permissions.group-create"] = "Группа $1 создана!";
$.lang.data["net.phantombot.permissions.group-set"] = "Группа $1 изменена на $2!";
$.lang.data["net.phantombot.permissions.group-set-err-same"] = "Вы не можете повышать других пользователей до ранга, совпадающего с Вашим.";
$.lang.data["net.phantombot.permissions.group-set-err-above"] = "Ваш ранг должен быть выше, чем ранг пользователя, которого Вы повышаете!";
$.lang.data["net.phantombot.permissions.group-points-set"] = "$1 множитель баллов выставлен $2!";
$.lang.data["net.phantombot.permissions.group-points-err-zero"] = "Множитель баллов для группы должен быть числом большим 0!";
$.lang.data["net.phantombot.permissions.group-current-self"] = "$1, Вы в группе $2.";
$.lang.data["net.phantombot.permissions.group-current-other"] = "$1 в данный момент в группе $2.";
$.lang.data["net.phantombot.permissions.group-list"] = "Группы: $1";
$.lang.data["net.phantombot.permissions.group-usage"] = "Использование: !group, !group <название>, !group set <название> <группа>, !group list, !group name <id> <новое имя>";
$.lang.data["net.phantombot.permissions.group-name-err-default"] = "Стандартное название группы не может быть изменено!";
$.lang.data["net.phantombot.permissions.group-name"] = "Изменена группа '$1' на '$2'!";
$.lang.data["net.phantombot.permissions.users"] = "Пользователей на каналеl: ";
$.lang.data["net.phantombot.permissions.mods"] = "Модераторов на канале: ";
$.lang.data["net.phantombot.permissions.admins"] = "Администраторов на канале: ";

//commandList.js
$.lang.data["net.phantombot.commandlist.commands"] = "Команды";
$.lang.data["net.phantombot.commandlist.page"] = " страница $1 из $2 ";
$.lang.data["net.phantombot.commandlist.more"] = " >> Введите '!botcommands 2, 3 и т.д.... для большего";
$.lang.data["net.phantombot.commandlist.nocommands"] = "В данный момент отсутствуют доступные Вам команды";
$.lang.data["net.phantombot.commandlist.commands-per-page"] = "Теперь будет $1 команд на странице при использовании !botcommands";
$.lang.data["net.phantombot.commandlist.commands-per-page-usage"] = "Использование: !commandsperpage <число не меньше 10>";

//chatModerator.js
$.lang.data["net.phantombot.chatmoderator.purged"] = " [Очищено]";
$.lang.data["net.phantombot.chatmoderator.banned"] = " [Забанено]";
$.lang.data["net.phantombot.chatmoderator.timedout"] = " [Время истекло ($1)]";
$.lang.data["net.phantombot.chatmoderator.whitelist-add"] = "Ссылка $1 была добавлена в белый список!";
$.lang.data["net.phantombot.chatmoderator.whitelist-usage"] = "Использование: !whitelist <ссылка>";
$.lang.data["net.phantombot.chatmoderator.forgive"] = "Уменьшено $1 на $2 страйка(-ов)!";
$.lang.data["net.phantombot.chatmoderator.increase"] = "Увеличено $1 на $2 страйка(-ов)!";
$.lang.data["net.phantombot.chatmoderator.permit"] = "$1 разрешено опубликовать ссылку в течение следующих 12 секунд!";
$.lang.data["net.phantombot.chatmoderator.ban-err-time"] = "$1 не является допустимой величиной количества времени";
$.lang.data["net.phantombot.chatmoderator.ban"] = "$1 забанен на $2 часа(-ов)";
$.lang.data["net.phantombot.chatmoderator.ban-indef"] = "$1 забанен навсегда";
$.lang.data["net.phantombot.chatmoderator.unban"] = "$1 более не забанен";
$.lang.data["net.phantombot.chatmoderator.clearchat"] = "$1 очистил чат!";
$.lang.data["net.phantombot.chatmoderator.autoban"] = "Добавлена фраза в список запрещенных! Это действие может быть отменено только вручную!";
$.lang.data["net.phantombot.chatmoderator.autopurge"] = "Добавлена фраза в список для автоочистки! Это действие может быть отменено только вручную!";
$.lang.data["net.phantombot.chatmoderator.chatmod-help-1"] = "Использование: !chatmod <опция> [новое значение new value]";
$.lang.data["net.phantombot.chatmoderator.chatmod-help-2"] = "-Опции: ";
$.lang.data["net.phantombot.chatmoderator.chatmod-warn-reset-time"] = "Текущее количество времени, в секундах, после которого предупреждение пользователя о ссылке или использовании капс-лока, сбросится и будет составлять $1 секунд. Для изменения этой настройки: !chatmod warningcountresettime <-1 для навсегда, время>";
$.lang.data["net.phantombot.chatmoderator.chatmod-warn-reset-time-never"] = "Изменено время показа предупреждения на бессрочное!";
$.lang.data["net.phantombot.chatmoderator.chatmod-warn-reset-time-set"] = "Изменено время показа предупреждения сброшено на $1 секунд!";

//pointSystem.js
$.lang.data["net.phantombot.pointsystem.bonus-error-negative"] = "Вы не можете выставить отрицательный бонус для You can not set the bonus per group level to negative $1.";
$.lang.data["net.phantombot.pointsystem.bonus-success"] = "Выставить $1 бонус для $2 за уровень группы Set the $1 bonus to $2 per group level.";
$.lang.data["net.phantombot.pointsystem.bonus-usage"] = "Использование: \"!points bonus <количество>\"";
$.lang.data["net.phantombot.pointsystem.config"] = "[Point Settings] - [Name (single): $1] - [Name (multiple): $2] - [Gain: $3] - [Gain (offline): $4] - [Interval: $5 minute(s)] - [Interval (offline): $6 minute(s)] - [Bonus: $7 per group level] - [Gifting Minimum: $8]";
$.lang.data["net.phantombot.pointsystem.gain-offline-error-negative"] = "Вы не можете выставить количество $1 преобразующее в отрацительное число.";
$.lang.data["net.phantombot.pointsystem.gain-offline-success"] = "Выставить $1 пополнение на $2 каждые $3 минут(ы) пока трансляция не в эфире.";
$.lang.data["net.phantombot.pointsystem.gain-offline-usage"] = "Использование: \"!points offlinegain <количество>\"";
$.lang.data["net.phantombot.pointsystem.gain-error-negative"] = "Выставить $1 пополнение на $2 каждые $3 минут(ы) пока трансляция не в эфире.";
$.lang.data["net.phantombot.pointsystem.gain-success"] = "Выставить $1 пополнение на $2 каждые $3 минут(ы) пока трансляция не в эфире.";
$.lang.data["net.phantombot.pointsystem.gain-usage"] = "Использование: \"!points gain <количество>\"";
$.lang.data["net.phantombot.pointsystem.get-other"] = "$1 в данный момент имеет $2.";
$.lang.data["net.phantombot.pointsystem.get-other-nopoints"] = "$1 в данный момент не имеет $2.";
$.lang.data["net.phantombot.pointsystem.get-other-time"] = "$1 в данный момент имеет $2 и был в чате $3.";
§$.lang.data["net.phantombot.pointsystem.get-self"] = "У Вас сейчас $1.";
$.lang.data["net.phantombot.pointsystem.get-self-nopoints"] = "Сейчас у Вас нет $1. Оставайтесь в чате, чтобы заработать $1!";
$.lang.data["net.phantombot.pointsystem.get-self-time"] = "Сейчас у Вас есть $1, и Вы были в чате в течение $2.";
$.lang.data["net.phantombot.pointsystem.gift-error-negative"] = "Вы не можете подарить отрицательное число $1.";
$.lang.data["net.phantombot.pointsystem.gift-error-notenough"] = "Вы не можете перевести $1 для $2.";
$.lang.data["net.phantombot.pointsystem.gift-error-notminimum"] = "Вам нужно перевести хотя бы $1.";
$.lang.data["net.phantombot.pointsystem.gift-error-toself"] = "Ой! Что-то пошло не так! Может быть Вам не стоит пытаться подарить себе $1?... OMGScoots";
$.lang.data["net.phantombot.pointsystem.gift-success"] = "Ура! Вы перевели $1 для $2. У $2 теперь есть $3, а у Вас $4.";
$.lang.data["net.phantombot.pointsystem.gift-received"] = "Ура! Вам в подарок $1 от $2.";
$.lang.data["net.phantombot.pointsystem.gift-usage"] = "Использование: \"!gift <имя> <количество>\"";
$.lang.data["net.phantombot.pointsystem.give-all-error-negative"] = "Вы не можете дать всем отрицательное количество $1.";
$.lang.data["net.phantombot.pointsystem.give-all-success"] = "$1 отправлено всем на этом канале!";
$.lang.data["net.phantombot.pointsystem.give-all-usage"] = "Использование: \"!points all <количество>\"";
$.lang.data["net.phantombot.pointsystem.give-error-negative"] = "Вы не можете отправить отрицательное число $1.";
$.lang.data["net.phantombot.pointsystem.give-success"] = "Отправлено $1 для $2. Текущий баланс $3.";
$.lang.data["net.phantombot.pointsystem.give-usage"] = "Использование: \"!points give <имя> <количество>\"";
$.lang.data["net.phantombot.pointsystem.help"] = "Использование: '!points give <имя> <количество>' -- '!points take <имя> <количество>' -- '!points set <имя> <количество>' -- '!points gift <имя> <количество>' -- '!points gain <количество>' -- '!points bonus <количество>' -- '!points name <количество>'";
$.lang.data["net.phantombot.pointsystem.interval-offline-error-negative"] = "Вы не можете выставить $1 интервал оплаты за отрицательное количество минут."; 
$.lang.data["net.phantombot.pointsystem.interval-offline-success"] = "Выставить $1 интервао оплаты за $2 минут(ы) когда стрим будет в эфире.";
$.lang.data["net.phantombot.pointsystem.interval-offline-usage"] = "Использование: \"!points offlineinterval <сумма>\"";
$.lang.data["net.phantombot.pointsystem.interval-error-negative"] = "Вы не можете выставить $1 сумму оплаты за отрицательное количество минут.";
$.lang.data["net.phantombot.pointsystem.interval-success"] = "Выставить $1 интервал оплаты за $2 минут(ы), когда стрим будет в эфире.";
$.lang.data["net.phantombot.pointsystem.interval-usage"] = "Usage: \"!points interval <сумма>\"";
$.lang.data["net.phantombot.pointsystem.makeitrain-error-invalid"] = " Извините,сейчас невозможно сделать денежный дождь из $1.";
$.lang.data["net.phantombot.pointsystem.makeitrain-error-negative"] = "Вы не можете сделать денежный дождь из отрицательного $1.";
$.lang.data["net.phantombot.pointsystem.makeitrain-error-notenough"] = "Вы не можете позволить себе денежный дождь $1.";
$.lang.data["net.phantombot.pointsystem.makeitrain-success"] = "Грядет денежный дождь! $1 выбрасывает $2 в воздух, в результате у всех есть$3!";
$.lang.data["net.phantombot.pointsystem.makeitrain-usage"] = "Использование: \"!makeitrain <сумма>\"";
$.lang.data["net.phantombot.pointsystem.mingift-error-negative"] = "Вы не можете выставить минимальную подарочную сумму $1 как отрицательное число.";
$.lang.data["net.phantombot.pointsystem.mingift-success"] = "Выставить минимальную сумму $1 в подарок для $2.";
$.lang.data["net.phantombot.pointsystem.mingift-usage"] = "Ипользование: \"!points mingift <сумма>\"";
$.lang.data["net.phantombot.pointsystem.name-success-both"] = "$1 была изменена с \"$2\" на \"$3\". Назначьте имя для одного $4 используя \"!points name single <имя>\".";
$.lang.data["net.phantombot.pointsystem.name-success-multiple"] = "Имя нескольких $1 изменено с \"3 $2\" на \"3 $3\". Для выставления имени для одного $4 используйте \"!points name single <имя>\".";
$.lang.data["net.phantombot.pointsystem.name-success-single"] = "Имя одного $1 было изменено с \"1 $2\" на \"1 $3\". Для того, чтобы выставить имя для нескольких $4 используйте \"!points name multiple <имя>\".";
$.lang.data["net.phantombot.pointsystem.name-usage"] = "To change the name of a single point, use \"!points name single <name>\". Для того, чтобы изменить имя нескольких баллов, используйте \"!points name <\"multi\" или \"multiple\"> <имя>\".";
$.lang.data["net.phantombot.pointsystem.reset-success"] = "Все $1 от всех пользователей было сброшено на 0.";
$.lang.data["net.phantombot.pointsystem.set-error-negative"] = "Вы не можете выставить баланс отрицательным $1.";
$.lang.data["net.phantombot.pointsystem.set-success"] = "Выставить баланс $1 балансом $2 на $3.";
$.lang.data["net.phantombot.pointsystem.set-usage"] = "Использование: \"!points set <имя> <сумма>\"";
$.lang.data["net.phantombot.pointsystem.take-error-toomuch"] = "Вы не можете взять больше, чем $1 имеет в $2.";
$.lang.data["net.phantombot.pointsystem.take-success"] = "Взято $1 от $2. Новый баланс $3.";
$.lang.data["net.phantombot.pointsystem.take-usage"] = "Использование: \"!points take <имя> <сумма>\"";
$.lang.data["net.phantombot.pointsystem.timetoggle-disabled"] = "Отключить отображение времени в момент подсчета $1.";
$.lang.data["net.phantombot.pointsystem.timetoggle-enabled"] = "Включить отображение времени в момент подсчета $1 .";
$.lang.data["net.phantombot.pointsystem.toggle-success"] = "Пользователи группы $1 или выше теперь могут использовать команды управления баллами.";

// timeSystem.js
$.lang.data["net.phantombot.timesystem.autolevel-disabled"] = "Пользователи больше не смогут повышение до $1 если они были в чате в течение $2 часов.";
$.lang.data["net.phantombot.timesystem.autolevel-enabled"] = "Пользователи теперь могут получить повышение до $1 если они были в чате в течение $2 часов.";
$.lang.data["net.phantombot.timesystem.autolevel-promote"] = "$1 был повышен до $2 проведя в чате $3 часов. Поздравляем!";
$.lang.data["net.phantombot.timesystem.get-other"] = "$1 на данный момент провел $2 в чате.";
$.lang.data["net.phantombot.timesystem.get-self"] = "Вы провели $1 в чате.";
$.lang.data["net.phantombot.timesystem.give-error-negative"] = "Вы не можете дать отрицательное время.";
$.lang.data["net.phantombot.timesystem.give-success"] = "Отправлено $1 для $2. Новый баланс $3.";
$.lang.data["net.phantombot.timesystem.give-usage"] = "Использование: \"!time give <имя> <сумма>\"";
$.lang.data["net.phantombot.timesystem.help"] = "Использование: '!time give <имя> <сумма>' -- '!time take <имя> <сумма>' -- '!time set <имя> <сумма>'";
$.lang.data["net.phantombot.timesystem.offlinetime-disabled"] = "Время оффлайн больше не учитывается к засчитываемому времени.";
$.lang.data["net.phantombot.timesystem.offlinetime-enabled"] = "Время оффлайн теперь будет учитываться к засчитываемому времени.";
$.lang.data["net.phantombot.timesystem.promotehours-error-negative"] = "Вы не можете выставить отрицательное количество часов для повышения пользователя $1.";
$.lang.data["net.phantombot.timesystem.promotehours-success"] = "Выставлено время в часах для повышения польхователя $1 до $2.";
$.lang.data["net.phantombot.timesystem.promotehours-usage"] = "Использование: \"!time promotehours <сумма>\"";
$.lang.data["net.phantombot.timesystem.reset-success"] = "Баланс времени для всех пользователей сброшен до $1.";
$.lang.data["net.phantombot.timesystem.set-error-negative"] = "Вы не можете установить баланс на отрицательное количество времени.";
$.lang.data["net.phantombot.timesystem.set-success"] = "Выставлен баланс времени с $1 на $2.";
$.lang.data["net.phantombot.timesystem.set-usage"] = "Использование: \"!time set <имя> <сумма>\"";
$.lang.data["net.phantombot.timesystem.take-error-toomuch"] = "Вы не можете взять больше то, что есть у $1 в часах.";
$.lang.data["net.phantombot.timesystem.take-success"] = "Взято $1 от $2. Новый баланс $3.";
$.lang.data["net.phantombot.timesystem.take-usage"] = "Использование: \"!time take <имя> <сумма>\"";
$.lang.data["net.phantombot.timesystem.toggle-success"] = "Users in the group $1 or higher are now able to use time management commands.";
$.lang.data["net.phantombot.streamertime"] = "В данный момент $1 где $2 располагается.";
$.lang.data["net.phantombot.timezone.error-invalid"] = "\"$1\" недопустимая временная зона. Список временных зон можно найти тут \"http://en.wikipedia.org/wiki/List_of_tz_database_time_zones\".";
$.lang.data["net.phantombot.timezone.get"] = "Временная зона стримера на данный момент \"$1\".";
$.lang.data["net.phantombot.timezone.success"] = "Временная зона выставлена на \"$1\".";
$.lang.data["net.phantombot.timezone.usage"] = "Использование: \"!timezone <имя>\"";
$.lang.data["net.phantombot.uptime.success-online"] = "/me [Stream Uptime] $1 был в сети в течение $2.";
$.lang.data["net.phantombot.uptime.success-offline"] = "$1 в данный момент не эфире.";
$.lang.data["net.phantombot.botuptime.success"] = "/me [Bot Uptime] $1 был в сети в течение $2.";

// raidSystem.js
$.lang.data["net.phantombot.raidsystem.raid-error-toomuch"] = "Во избежание общего бана от Twitch, максимальное значение выставлено на $1.";
$.lang.data["net.phantombot.raidsystem.raid-success"] = "/me http://www.twitch.tv/$1 $2";
$.lang.data["net.phantombot.raidsystem.raid-usage"] = "Использование: \"!raid (name) | !raid (name) (message) | !raid (name) (amount) | !raid (name) (amount) (message)\"";
$.lang.data["net.phantombot.raidsystem.raider-success"] = "Спасибо за рейд, $1! Это $2 раз когда $1 участвует в рейде! Пожалуйста, подписывайтесь http://twitch.tv/$3 !";
$.lang.data["net.phantombot.raidsystem.raider-usage"] = "Использование: \"!raider <имя>\"";

//addCommand.js
$.lang.data["net.phantombot.addcommand.addcom-success"] = "$1, создана команда: !$2";
$.lang.data["net.phantombot.addcommand.addcom-error"] = "Такая команда уже есть, $1";
$.lang.data["net.phantombot.addcommand.addcom-error-usage"] = "Использование: \"!addcom (command) (message)\"";
$.lang.data["net.phantombot.addcommand.delcom-success"] = "$1, удалена команда: !$2";
$.lang.data["net.phantombot.addcommand.delcom-error-usage"] = "Использование: \"!delcom (command)\"";
$.lang.data["net.phantombot.addcommand.editcom-success"] = "$1, изменена команда: !$2";
$.lang.data["net.phantombot.addcommand.editcom-error"] = "Такой команды нет, $1";
$.lang.data["net.phantombot.addcommand.editcom-error-usage"] = "Использование: \"!editcom (команда (сообщение)\"";
$.lang.data["net.phantombot.addcommand.pricecom-current-set-price"] = "The command !$1 стоит $2!";
$.lang.data["net.phantombot.addcommand.pricecom-current-set-price2"] = "Команда !$1 сейчас стоит 0 $2!";
$.lang.data["net.phantombot.addcommand.pricecom-success"] = "Цена за !$1 была выставлена $2 $3.";
$.lang.data["net.phantombot.addcommand.pricecom-error1"] = "Пожалуйста, выберите существующую команду и доуступную для не модераторов.";
$.lang.data["net.phantombot.addcommand.pricecom-error2"] = "Пожалуйста, введите корректную цену, 0 или больше.";
$.lang.data["net.phantombot.addcommand.pricecom-error-usage"] = "Использование: \"!pricecom (команда) (цена)\"";
$.lang.data["net.phantombot.addcommand.helpcom-error-usage"] = "Использование: \"!addcom (команда) (сообщение) / !delcom (сообщение) / !editcom (команда) (сообщение / !permcom (команда) (группа) / !pricecom (команда) (сумма))\"";
$.lang.data["net.phantombot.addcommand.helpcom-command-tags"] = "При использовании !addcom, Вы можете ввести текст '(отправитель)' , чтобы увидеть имя любого пользователя, который говорит новую команду, вставляя в неё. Пр. '!addcom hello Hello there (отправитель)!'";
$.lang.data["net.phantombot.addcommand.helpcom-command-tags2"] = "При использовании !addcom, Вы можете также ввести '(1)', '(2)', и т.д. для применеия параметров. Пр. '!addcom kill (отправитель) только что убил (1) с помощью (2)!'";
$.lang.data["net.phantombot.addcommand.helpcom-command-tags3"] = "Дополнительные специальные теги: '(count)' will add the number of times the command was used (including the current usage)";
$.lang.data["net.phantombot.addcommand.aliascom-success"] = "$1, команда !$2 имеет алиас !$3";
$.lang.data["net.phantombot.addcommand.aliascom-error-no-command"] = "Заданная команда не существует $1!";
$.lang.data["net.phantombot.addcommand.aliascom-failed"] = "Вы можете только переписать алиас $1!";
$.lang.data["net.phantombot.addcommand.aliascom-error-usage"] = "Использование: \"!aliascom (существующая команда) (имя алиаса)\"";
$.lang.data["net.phantombot.addcommand.custom-commands"] = "Текущие пользовательские команды: $1";
$.lang.data["net.phantombot.addcommand.delalias-success"] = "$1, алиас !$2 был удален!";
$.lang.data["net.phantombot.addcommand.delalias-error-no-command"] = "Этот алиас не существует $1!";
$.lang.data["net.phantombot.addcommand.delalias-error-usage"] = "Использование: \"!delalias (имя алиаса\"";
$.lang.data["net.phantombot.addcommand.permcom-success"] = "Права для команд: $1 выставлено для группы: $2 и выше.";
$.lang.data["net.phantombot.addcommand.permcom-removed-success"] = "Все рекурсивные права для команд: $1 и принадлежащие алиасы были удалены.";
$.lang.data["net.phantombot.addcommand.permcom-syntax-error"] = "Вы должны выбрать режим прав из 1 или 2! 1 указывает только отдельные группы, несколько отдельных групп можно добавить для одной команды. 2 определяет рекурсивные (все группы выше, чем указанная).";
$.lang.data["net.phantombot.addcommand.permcom-error-no-command"] = "Команда !$1 не существует!";
$.lang.data["net.phantombot.addcommand.permcom-error-usage"] = "Использование: \"!permcom (название команды) (название группы) (1/2). Ограничиает использование команды наблюдателям с определенным уровнем прав. 1 определяет только отдельные группы, несколько отдельных групп могут быть добавлены для одной команды. 2 определяет рекурсивные (все группы вышем, чем указанная).\"";

//raffleSystem.js
$.lang.data["net.phantombot.rafflesystem.start-success-followers-price"] = "/me [Raffle Started] Войдите для получения шанса на выигрыш [$1]! Вы должны быть подписчиком для того, чтобы войти, плата за вход составляет $2. Для участия в розыгрыше введите \"$3\".";
$.lang.data["net.phantombot.rafflesystem.start-success-followers"] = "/me [Raffle Started] Войдите для получения шанса на выигрыш [$1]! Вы должны быть подписчиком для того, чтобы войти. Для участия в розыгрыше введите \"$2\".";
$.lang.data["net.phantombot.rafflesystem.start-success-price"] = "/me [Raffle Started] Enter now for a chance to win [$1]! The fee to enter is $2. Enter the raffle by typing \"$3\".";
$.lang.data["net.phantombot.rafflesystem.start-success-default"] = "/me [Raffle Started] Enter now for a chance to win [$1]! Enter the raffle by typing \"$2\".";
$.lang.data["net.phantombot.rafflesystem.start-usage-points"] = "Invalid format. Usage: \"!raffle start [-followers] <reward> [<price>] [<keyword>]\".";
$.lang.data["net.phantombot.rafflesystem.start-usage-default"] = "Invalid format. Usage: \"!raffle start [-followers] <reward> [<keyword>]\".";
$.lang.data["net.phantombot.rafflesystem.start-error-invalid-points"] = "The keyword can be either \"!raffle\" or a word without \"!\". Usage: \"!raffle start [-followers] <reward> [<price>] [<keyword>]\"."
$.lang.data["net.phantombot.rafflesystem.start-error-invalid-default"] = "The keyword can be either \"!raffle\" or a word without \"!\". Usage: \"!raffle start [-followers] <reward> [<keyword>]\"."
$.lang.data["net.phantombot.rafflesystem.start-error-running"] = "You can not start a new raffle while another raffle is active.";
$.lang.data["net.phantombot.rafflesystem.close-error-notrunning"] = "You can not close a raffle while no raffle is active.";
$.lang.data["net.phantombot.rafflesystem.close-success-noentries"] = "/me [Raffle Ended] The raffle is now closed. Nobody entered, thus there is no winner.";
$.lang.data["net.phantombot.rafflesystem.close-success-nofollow"] = "/me [Raffle Ended] The raffle is now closed. Everybody that entered isn't following, thus there is no winner.";
$.lang.data["net.phantombot.rafflesystem.close-success-points"] = "/me [Raffle Ended] The raffle is now closed. The winner is $1, congratulations! Added $2 to your balance!";
$.lang.data["net.phantombot.rafflesystem.close-success-default"] = "/me [Raffle Ended] The raffle is now closed. The winner is $1, congratulations! You won $2, contact the broadcaster for your prize!";
$.lang.data["net.phantombot.rafflesystem.enter-notcommand-followers-price"] = "A raffle is active for a chance to win [$1]! You need to be following to enter, and the fee to enter is $2. Enter the raffle by typing \"$3\".";
$.lang.data["net.phantombot.rafflesystem.enter-notcommand-followers"] = "A raffle is active for a chance to win [$1]! You need to be following to enter. Enter the raffle by typing \"$2\".";
$.lang.data["net.phantombot.rafflesystem.enter-notcommand-price"] = "A raffle is active for a chance to win [$1]! The fee to enter is $2. Enter the raffle by typing \"$3\".";
$.lang.data["net.phantombot.rafflesystem.enter-notcommand-default"] = "A raffle is active for a chance to win [$1]! Enter the raffle by typing \"$2\".";
$.lang.data["net.phantombot.rafflesystem.enter-error-notrunning"] = "There are no raffles active at the moment. If you are a $1, start a new raffle by using \"!raffle start\" (raffle item) (keyword).";
$.lang.data["net.phantombot.rafflesystem.enter-error-entered"] = "You have already entered the raffle.";
$.lang.data["net.phantombot.rafflesystem.enter-error-notenough"] = "You do not have enough $1 to enter the raffle."
$.lang.data["net.phantombot.rafflesystem.enter-error-iscaster"] = "The channel broadcaster can't enter the raffle."
$.lang.data["net.phantombot.rafflesystem.enter-error-nofollow"] = "You are not following. For this raffle, you need to be following."
$.lang.data["net.phantombot.rafflesystem.enter-success"] = "You have entered the raffle."
$.lang.data["net.phantombot.rafflesystem.redraw-success-nofollow"] = "/me [Raffle Redraw] Everyone that entered isn't following, thus there is no winner.";
$.lang.data["net.phantombot.rafflesystem.redraw-success-default"] = "/me [Raffle Redraw] The winner is $1, congratulations! You won $2, contact the broadcaster for your prize!";
$.lang.data["net.phantombot.rafflesystem.redraw-error-running"] = "You can not pick another winner of a raffle that is still running.";
$.lang.data["net.phantombot.rafflesystem.redraw-error-noentries"] = "You can not pick another winner of a raffle that has no entries.";
$.lang.data["net.phantombot.rafflesystem.redraw-error-pointraffle"] = "You can not pick another winner of a raffle that rewards $1 to users.";
$.lang.data["net.phantombot.rafflesystem.result-success-running"] = "The stats of the active raffle are: [Reward: $1] - [Entry Fee: $2] - [Prize Mode: $3] - [Follow Mode: $4] - [Keyword: $5] - [Entries: $6]";
$.lang.data["net.phantombot.rafflesystem.result-success-norunning"] = "The stats of the previous raffle are: [Reward: $1] - [Entry Fee: $2] - [Prize Mode: $3] - [Follow Mode: $4] - [Keyword: $5] - [Entries: $6] - [Winner: $7] - [Date: $8]";
$.lang.data["net.phantombot.rafflesystem.result-error-notfound"] = "Could not find any valid raffle stats.";
$.lang.data["net.phantombot.rafflesystem.toggle-enabled"] = "Users will now be notified of their entry into the raffle.";
$.lang.data["net.phantombot.rafflesystem.toggle-disabled"] = "Users will no longer be notified of their entry into the raffle.";
$.lang.data["net.phantombot.rafflesystem.entries-error-noresults"] = "Could not find any raffle entries to display.";
$.lang.data["net.phantombot.rafflesystem.entries-success"] = "[Raffle Entries] Page $1 of $2: $3.";
$.lang.data["net.phantombot.rafflesystem.entries-usage"] = "Использование: \"!raffle entries <страница>\"";

// bidSystem.js
$.lang.data["net.phantombot.bidsystem.close-error-notrunning"] = "You can not close a auction while no auction is active.";
$.lang.data["net.phantombot.bidsystem.close-success"] = "/me [Auction Ended] The auction is now closed. The highest bidder is $1 with $2.";
$.lang.data["net.phantombot.bidsystem.close-success-noentries"] = "/me [Auction Ended] The auction is now closed. Nobody entered, thus there is no winner.";
$.lang.data["net.phantombot.bidsystem.enter-error-belowminimum"] = "You need to bid at least $1 to enter the auction.";
$.lang.data["net.phantombot.bidsystem.enter-error-notenough"] = "You do not have enough $1 to bid $2.";
$.lang.data["net.phantombot.bidsystem.enter-error-notrunning"] = "You can not make a new bid while no auction is running.";
$.lang.data["net.phantombot.bidsystem.enter-success"] = "[Auction Updated] $1 bid $2. To top this, you need to bid at least $3.";
$.lang.data["net.phantombot.bidsystem.get-error-notrunning"] = "There are no auctions active at the moment. If you are a $1, start a new auction by using \"!auction start\".";
$.lang.data["net.phantombot.bidsystem.get-running-entries"] = "An auction is currently running! The top bid is $1 by $2. Top top this, you need to bid at least $3.";
$.lang.data["net.phantombot.bidsystem.get-running-noentries"] = "An auction is currently running! To enter the auction, you need to bid at least $1.";
$.lang.data["net.phantombot.bidsystem.points-disabled"] = "You can not use this command while the points module is disabled.";
$.lang.data["net.phantombot.bidsystem.start-error-running"] = "You can not start a new auction while another auction is active.";
$.lang.data["net.phantombot.bidsystem.start-success"] = "/me [Auction Started] A new auction has started. The minimum bid is $1 and will increase with $2 for every new bid. Make a bid by typing \"!bid <amount>\".";
$.lang.data["net.phantombot.bidsystem.usage"] = "Использование: \"!bid <сумма>\"";
$.lang.data["net.phantombot.bidsystem.warning-error-notrunning"] = "You can not issue a final warning while no auction is active.";
$.lang.data["net.phantombot.bidsystem.warning-success-entries"] = "/me [Auction Warning] The auction is about to close. The current top bid is $1 by $2. The next minimum bid has to be $3 or more.";
$.lang.data["net.phantombot.bidsystem.warning-success-noentries"] = "/me [Auction Warning] The auction is about to close. There currently are no bids. To enter, bid $1 or more.";

// penaltySystem.js
$.lang.data["net.phantombot.penaltysystem.get-nopenalty"] = "You currently have no active penalty. Keep it this way! :-)";
$.lang.data["net.phantombot.penaltysystem.get-other-nopenalty"] = "$1 currently has no active penalty.";
$.lang.data["net.phantombot.penaltysystem.get-other-penalty"] = "$1 currently can not earn any $2. This will last untill they gained $3.";
$.lang.data["net.phantombot.penaltysystem.get-other-penalty-indefinitely"] = "$1 currently can not earn any $2. Untill a $3 disables it, this is permanent.";
$.lang.data["net.phantombot.penaltysystem.get-penalty"] = "You currently can not earn any $1. This will last untill you gained $2.";
$.lang.data["net.phantombot.penaltysystem.get-penalty-indefinitely"] = "You currently can not earn any $1. Untill a $2 disables it, this is permanent.";
$.lang.data["net.phantombot.penaltysystem.lifted"] = "$1 no longer has an active penalty. Increased their balance by $2.";
$.lang.data["net.phantombot.penaltysystem.points-disabled"] = " You can not use this command while the points module is disabled.";
$.lang.data["net.phantombot.penaltysystem.set-disabled"] = "$1 no longer has an active penalty.";
$.lang.data["net.phantombot.penaltysystem.set-enabled-indefinitely"] = "$1 now has an active penalty and can not gain any more $2. Untill a $3 disables it, this is permanent.";
$.lang.data["net.phantombot.penaltysystem.set-enabled-threshold"] = "$1 now has an active penalty and can not gain any more $2. This will last untill they gained $3.";
$.lang.data["net.phantombot.penaltysystem.usage"] = "Использование: \"!penalty [<имя>, <сумма>]\"";

// betSystem.js
$.lang.data["net.phantombot.betsystem.autoclose-success"] = "/me [Bet Closing] The current bet is about to close. The current betting pot is $1.";
$.lang.data["net.phantombot.betsystem.betmax-error-negative"] = "You can not set the maximum amount of $1 for bets to a negative number.";
$.lang.data["net.phantombot.betsystem.betmax-success"] = "Set the maximum amount of $1 for bets to $2.";
$.lang.data["net.phantombot.betsystem.betmax-usage"] = "Использование: \"!bet max <сумма>\"";
$.lang.data["net.phantombot.betsystem.betmin-error-negative"] = "You can not set the minimum amount of $1 for bets to a negative number.";
$.lang.data["net.phantombot.betsystem.betmin-success"] = "Set the minimum amount of $1 for bets to $2.";
$.lang.data["net.phantombot.betsystem.betmin-usage"] = "Использование: \"!bet min <сумма>\"";
$.lang.data["net.phantombot.betsystem.close-error-nooption"] = "You can not close a bet without declaring the winning option.";
$.lang.data["net.phantombot.betsystem.close-error-notfound"] = "You can not close a bet using this option as it is not included in the active bet.";
$.lang.data["net.phantombot.betsystem.close-error-notowner"] = "You can not close a bet if you did not start the active bet.";
$.lang.data["net.phantombot.betsystem.close-error-notrunning"] = "You can not close a bet while no bet is active.";
$.lang.data["net.phantombot.betsystem.close-success"] = "/me [Bet Close] The bet has closed! Every user that voted on \"$1\" won $2!";
$.lang.data["net.phantombot.betsystem.close-success-notenough"] = "/me [Bet Closed] The bet is now closed. Not enough people entered, and $1 have been refunded.";
$.lang.data["net.phantombot.betsystem.close-success-nowinners"] = "/me [Bet Closed] The bet is now closed. Nobody won, better luck next time!";
$.lang.data["net.phantombot.betsystem.close-success-sameoption"] = "/me [Bet Closed] The bet is now closed. Everybody wagered on the same option, and $1 have been refunded.";
$.lang.data["net.phantombot.betsystem.enter-error-abovemax"] = "You can not wager more than $1.";
$.lang.data["net.phantombot.betsystem.enter-error-belowmin"] = "You can not wager less than $1.";
$.lang.data["net.phantombot.betsystem.enter-error-entered"] = "You have already entered the bet.";
$.lang.data["net.phantombot.betsystem.enter-error-negative"] = "You can not wager negative $1.";
$.lang.data["net.phantombot.betsystem.enter-error-notenough"] = "You do not have enough $1 to wager $2.";
$.lang.data["net.phantombot.betsystem.enter-error-notvalid"] = "You can not vote for an option not included in the active bet.";
$.lang.data["net.phantombot.betsystem.enter-success"] = "/me [Bet Update] $1 wagers $2 on \"$3\"! New pot: $4!";
$.lang.data["net.phantombot.betsystem.result-norunning-error-notfound"] = "Could not find any valid bet stats.";
$.lang.data["net.phantombot.betsystem.result-norunning-success"] = "The stats of the previous bet are: [Pot: $1] - [Entries: $2] - [Options: $3] - [Winning Option: \"$4\"] - [Date: $5]";
$.lang.data["net.phantombot.betsystem.result-running-error-notfound"] = "There currently are no entries. To enter and wager your $1, use \"!bet <amount> <option>\" with one of these options: $2.";
$.lang.data["net.phantombot.betsystem.result-running-success"] = "The stats of the active bet are: [Pot: $1] - [Entries: $2] - [Options: $3]";
$.lang.data["net.phantombot.betsystem.start-error-notenough"] = "You can not start a new bet because you didn't specify enough options.";
$.lang.data["net.phantombot.betsystem.start-error-running"] = "You can not start a new bet when another bet is already running.";
$.lang.data["net.phantombot.betsystem.start-success"] = "/me [Bet Started] A new bet has started. You can vote for $1. You have $2 second(s) to bet for a chance to win $3.";
$.lang.data["net.phantombot.betsystem.status-notrunning"] = "There are no bets active at the moment. If you are a $1, start a new bet by using \"!bet start\".";
$.lang.data["net.phantombot.betsystem.status-running"] = "To enter the active bet and wager your $1, use \"!bet <amount> <option>\" with one of these options: $2.";
$.lang.data["net.phantombot.betsystem.time-error-negative"] = "You can not set the maximum time between each wager to a negative number.";
$.lang.data["net.phantombot.betsystem.time-success"] = "Set the maximum time between each wager to $1 second(s).";
$.lang.data["net.phantombot.betsystem.time-usage"] = "Использование: \"!bet time <сумма>\"";
$.lang.data["net.phantombot.betsystem.entries-error-noresults"] = "Could not find any bet entries to display.";
$.lang.data["net.phantombot.betsystem.entries-success"] = "[Bet Entries] Page $1 of $2: $3.";
$.lang.data["net.phantombot.betsystem.entries-usage"] = "Использование: \"!bet entries <страница>\"";

// top10Command.js
$.lang.data["net.phantombot.top10.points-disabled"] = "You can not use this command while the points module is disabled.";
$.lang.data["net.phantombot.top10.points-error-noresults"] = "Could not find any users with $1.";
$.lang.data["net.phantombot.top10.points-success"] = "/me [Top 10 $1] $2";
$.lang.data["net.phantombot.top10.points-success-whisper"] = "[Top 10 $1] $2";
$.lang.data["net.phantombot.top10.time-disabled"] = "You can not use this command while the time module is disabled.";
$.lang.data["net.phantombot.top10.time-error-noresults"] = "Could not find any users with time spent in the chat.";
$.lang.data["net.phantombot.top10.time-success"] = "/me [Top 10 Time] $1";
$.lang.data["net.phantombot.top10.time-success-whisper"] = "[Top 10 Time] $1";

// greetingSystem.js
$.lang.data["net.phantombot.greetingsystem.maxchars-error-negative"] = "You can not set the maximum greeting character amount to a negative number.";
$.lang.data["net.phantombot.greetingsystem.maxchars-success"] = "Set the maximum greeting character amount to $1.";
$.lang.data["net.phantombot.greetingsystem.maxchars-usage"] = "Использование: \"!greet max <сумма>\"";
$.lang.data["net.phantombot.greetingsystem.set-cleared"] = "Your greeting message has been reset.";
$.lang.data["net.phantombot.greetingsystem.set-cleared-global"] = "The default greeting message has been reset.";
$.lang.data["net.phantombot.greetingsystem.set-cleared-other"] = "The greeting message of $1 has been reset.";
$.lang.data["net.phantombot.greetingsystem.set-error-noname"] = "Your greeting message must contain \"(name)\" to display your name.";
$.lang.data["net.phantombot.greetingsystem.set-error-noname-global"] = "The default greeting message must contain \"(name)\" to display someone's name.";
$.lang.data["net.phantombot.greetingsystem.set-error-noname-other"] = "The greeting message of $1 must contain \"(name)\" to display their name.";
$.lang.data["net.phantombot.greetingsystem.set-error-toolong"] = "Your greeting message can not be longer than $1 characters. It is now $2 characters long.";
$.lang.data["net.phantombot.greetingsystem.set-error-toolong-global"] = "The default greeting message can not be longer than $1 characters. It is now $2 characters long.";
$.lang.data["net.phantombot.greetingsystem.set-error-toolong-other"] = "The greeting message of $1 can not be longer than $2 characters. It is now $3 characters long.";
$.lang.data["net.phantombot.greetingsystem.set-success"] = "Your greeting message has been set to \"$1\".";
$.lang.data["net.phantombot.greetingsystem.set-success-global"] = "The default greeting message has been set to \"$1\".";
$.lang.data["net.phantombot.greetingsystem.set-success-other"] = "The greeting message of $1 has been set to \"$2\".";
$.lang.data["net.phantombot.greetingsystem.toggle-disabled"] = "A greeting message will no longer be displayed when you join.";
$.lang.data["net.phantombot.greetingsystem.toggle-disabled-global"] = "A greeting message will no longer be displayed when anyone joins.";
$.lang.data["net.phantombot.greetingsystem.toggle-disabled-other"] = "A greeting message will no longer be displayed when $1 joins.";
$.lang.data["net.phantombot.greetingsystem.toggle-enabled"] = "A greeting message will now be displayed when you join.";
$.lang.data["net.phantombot.greetingsystem.toggle-enabled-global"] = "A greeting message will now be displayed when anyone joins.";
$.lang.data["net.phantombot.greetingsystem.toggle-enabled-other"] = "A greeting message will now be displayed when $1 joins.";
$.lang.data["net.phantombot.greetingsystem.usage"] = "Использование: \"!greet max <сумма>\", \"!greet set [global OR user <имя>] <сообщение>\", \"!greet toggle [global OR user <имя>]\"";
