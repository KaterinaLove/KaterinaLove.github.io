const services = [
  '<div class="services-item"><img width="250" src="img/wedding.jpg" alt="Организация свадеб" class="services-item-img"><span class="services-item-span">Cвадьба</span></div>',
  '<div class="services-item"><img width="250" src="img/corporate.jpg" alt="Корпоративный праздник" class="services-item-img"><span class="services-item-span">Корпоративный праздник</span></div>',
  '<div class="services-item"><img width="250" src="img/outlet.jpg" alt="Выпускной" class="services-item-img"><span class="services-item-span">Выпускной</span></div>',
  '<div class="services-item"><img width="250" src="img/birthdays.jpg" alt="Дни рождения" class="services-item-img"><span class="services-item-span">Дни рождения</span></div>',
  '<div class="services-item"><img width="250" src="img/cityevents.jpg" alt="Городские мероприятия" class="services-item-img"><span class="services-item-span">Городские мероприятия</span></div>',
  '<div class="services-item"><img width="250" src="img/intheopenair.jpg" alt="На свежем воздухе" class="services-item-img"><span class="services-item-span">На свежем воздухе</span></div>'
];
const activity = [
  '<articl class="activity-item"><img src="img/freshair.jpg" alt="мероприятие на свежем ваздухе" width="300" class="activity-img"><time class="activity-time" pubdate="" datetime="2019-04-01"><span class="activity-day">1</span><span class="activity-month">апр</span><span class="activity-year">2019</span></time><span class="activity-h">Роупджампинг</span><p class="activity-p">Мега крутое описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe iusto dicta optio ipsa nobis quibusdam officiis delectus ad quos, autem dignissimos, ipsam libero at illo sint id ratione recusandae. Pariatur.</p><a href="https://m.vk.com/wall-152669026_266" class="activity-a">Read More...</a></articl>',
  '<articl class="activity-item"><img src="img/freshair.jpg" alt="мероприятие на свежем ваздухе" width="300" class="activity-img"><time class="activity-time" pubdate="" datetime="2019-05-01"><span class="activity-day">1</span><span class="activity-month">апр</span><span class="activity-year">2019</span></time><span class="activity-h">Мероприятие на свежем ваздухе</span><p class="activity-p">Мега крутое описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe iusto dicta optio ipsa nobis quibusdam officiis delectus ad quos, autem dignissimos, ipsam libero at illo sint id ratione recusandae. Pariatur.</p><a href="https://m.vk.com/wall-152669026_266" class="activity-a">Read More...</a></articl>',
  '<articl class="activity-item"><img src="img/freshair.jpg" alt="мероприятие на свежем ваздухе" width="300" class="activity-img"><time class="activity-time" pubdate="" datetime="2019-04-11"><span class="activity-day">1</span><span class="activity-month">апр</span><span class="activity-year">2019</span></time><span class="activity-h">8 Марта</span><p class="activity-p">Мега крутое описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe iusto dicta optio ipsa nobis quibusdam officiis delectus ad quos, autem dignissimos, ipsam libero at illo sint id ratione recusandae. Pariatur.</p><a href="https://m.vk.com/wall-152669026_266" class="activity-a">Read More...</a></articl>',
  '<articl class="activity-item"><img src="img/freshair.jpg" alt="мероприятие на свежем ваздухе" width="300" class="activity-img"><time class="activity-time" pubdate="" datetime="2019-04-18"><span class="activity-day">1</span><span class="activity-month">апр</span><span class="activity-year">2019</span></time><span class="activity-h">Международный день счастья</span><p class="activity-p">Мега крутое описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe iusto dicta optio ipsa nobis quibusdam officiis delectus ad quos, autem dignissimos, ipsam libero at illo sint id ratione recusandae. Pariatur.</p><a href="https://m.vk.com/wall-152669026_266" class="activity-a">Read More...</a></articl>',
  '<articl class="activity-item"><img src="img/freshair.jpg" alt="мероприятие на свежем ваздухе" width="300" class="activity-img"><time class="activity-time" pubdate="" datetime="2019-04-28"><span class="activity-day">1</span><span class="activity-month">апр</span><span class="activity-year">2019</span></time><span class="activity-h">Ведущий - как пионер</span><p class="activity-p">Мега крутое описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe iusto dicta optio ipsa nobis quibusdam officiis delectus ad quos, autem dignissimos, ipsam libero at illo sint id ratione recusandae. Pariatur.</p><a href="https://m.vk.com/wall-152669026_266" class="activity-a">Read More...</a></articl>',
  '<articl class="activity-item"><img src="img/freshair.jpg" alt="мероприятие на свежем ваздухе" width="300" class="activity-img"><time class="activity-time" pubdate="" datetime="2019-03-21"><span class="activity-day">1</span><span class="activity-month">апр</span><span class="activity-year">2019</span></time><span class="activity-h">Андрей и Анна Тарасенко</span><p class="activity-p">Мега крутое описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe iusto dicta optio ipsa nobis quibusdam officiis delectus ad quos, autem dignissimos, ipsam libero at illo sint id ratione recusandae. Pariatur.</p><a href="https://m.vk.com/wall-152669026_266" class="activity-a">Read More...</a></articl>'
]
var i = 0; //счетчик для services
var j = 0; //счетчик для activity
//проверка
function check() {
  if (i == services.length) {
    i = 0;
  }
  if (i == -1) {
    i = services.length - 1;
  }
}
//слайдер
var timerId = setInterval(function () {
  check();
  i++;
  check();
  document.getElementById('services').innerHTML = services[i];
}, 4000);
document.getElementById('servicesLeft').onclick = function () {
  check();
  i--;
  check();
  document.getElementById('services').innerHTML = services[i];
}
document.getElementById('servicesRight').onclick = function () {
  check();
  i++;
  check();
  document.getElementById('services').innerHTML = services[i];
}


//для мероприятий
//проверка
function checkActivity() {
  if (j == activity.length) {
    j = 0;
  }
  if (j == -1) {
    j = activity.length - 1;
  }
}
//слайдер
var timerIdActivity = setInterval(function () {
  checkActivity();
  j++;
  checkActivity();
  document.getElementById('activity').innerHTML = activity[j];
}, 2000);
document.getElementById('activityLeft').onclick = function () {
  checkActivity();
  j--;
  checkActivity();
  document.getElementById('activity').innerHTML = activity[j];
}
document.getElementById('activityRight').onclick = function () {
  checkActivity();
  j++;
  checkActivity();
  document.getElementById('activity').innerHTML = activity[j];
}

//анимация чисел