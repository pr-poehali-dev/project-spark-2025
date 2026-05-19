import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">ЖИВАЯ НИТЬ</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                О направлении
              </a>
              <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
                Афиша
              </a>
              <a href="#artists" className="text-muted-foreground hover:text-foreground transition-colors">
                Исполнители
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm">
              Купить билет
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            {/* Основной контент Hero */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Icon name="Music" className="w-3 h-3 mr-1" />
                    Народная музыка • Живые концерты
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance">
                    Голос
                    <span className="text-primary block">народной души</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Погружение в мир народной музыки — её истоки, образы, сюжеты. Живые выступления
                    легендарных исполнителей и самобытных коллективов, хранящих вековые традиции.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Купить билет
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Ближайший концерт
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero сетка изображений */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2 auto-rows-fr h-fit self-center">
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/acoustic-guitar-player-in-plant-filled-cafe.jpg"
                  alt="Народный певец"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-primary/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/jazz-trio-performing-in-plant-filled-venue.jpg"
                  alt="Фольклорный ансамбль"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-accent/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/indie-folk-singer-with-acoustic-guitar-in-intimate.jpg"
                  alt="Концерт"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/templates/lp/intimate-music-venue-with-plants-and-warm-lighting.jpg"
                  alt="Живое выступление"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Секция трёх столпов */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">МИР НАРОДНОЙ МУЗЫКИ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Три грани живого наследия — от древних истоков до современной сцены
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Sprout" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Истоки</h3>
              <p className="text-muted-foreground">
                Тысячелетние корни народных традиций: обрядовые песни, эпические сказания, плачи и колыбельные — живая память поколений.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="BookOpen" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Сюжеты и образы</h3>
              <p className="text-muted-foreground">
                Богатырские были, лирические напевы, образы природы и родины — архетипы, живущие в сердце каждого народного произведения.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Исполнители</h3>
              <p className="text-muted-foreground">
                Признанные мастера и самобытные ансамбли, которые несут живую традицию сквозь время — от деревенских певуний до академических хоров.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Афиша концертов */}
      <section id="events" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">БЛИЖАЙШИЕ КОНЦЕРТЫ</h2>
            <Button variant="outline">Вся афиша</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/indie-folk-singer-with-acoustic-guitar-in-intimate.jpg"
                  alt="Надежда Бабкина"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4">Сегодня</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Надежда Бабкина</h3>
                <p className="text-muted-foreground mb-4">Русская народная песня — от истоков до наших дней</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    19:00
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" className="w-4 h-4" />
                    200 мест
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/jazz-trio-performing-in-plant-filled-venue.jpg"
                  alt="Ансамбль Покровского"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  Завтра
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ансамбль Покровского</h3>
                <p className="text-muted-foreground mb-4">Аутентичный фольклор русских сёл</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    18:30
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" className="w-4 h-4" />
                    150 мест
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/acoustic-guitar-player-in-plant-filled-cafe.jpg"
                  alt="Хор им. Пятницкого"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  В эти выходные
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Хор им. Пятницкого</h3>
                <p className="text-muted-foreground mb-4">Легенды народной хоровой традиции</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    20:00
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" className="w-4 h-4" />
                    300 мест
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция О направлении */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Живая нить народной традиции</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Народная музыка — это не архив прошлого, а живое дыхание культуры. В каждом напеве
                  — история народа, его радости и горести, образы родной природы, сила духа и
                  неугасимая любовь к родной земле.
                </p>
                <p>
                  Мы собираем под одной крышей выдающихся исполнителей и хранителей традиции — тех,
                  кто передаёт живое слово из уст в уста, сохраняя самобытный звук вековых напевов.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Лет традиции</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">30+</div>
                  <div className="text-muted-foreground">Коллективов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/templates/lp/lush-indoor-garden-cafe-with-hanging-plants-and-na.jpg"
                  alt="Народные исполнители"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Известные исполнители */}
      <section id="artists" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ИЗВЕСТНЫЕ ИСПОЛНИТЕЛИ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Голоса, ставшие символами народной музыки
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Надежда Бабкина", desc: "Заслуженная артистка России, хранительница русской песни", img: "https://cdn.poehali.dev/templates/lp/indie-folk-singer-with-acoustic-guitar-in-intimate.jpg" },
              { name: "Ансамбль Покровского", desc: "Эталон аутентичного русского фольклора XX–XXI века", img: "https://cdn.poehali.dev/templates/lp/jazz-trio-performing-in-plant-filled-venue.jpg" },
              { name: "Хор им. Пятницкого", desc: "Старейший государственный народный хор страны", img: "https://cdn.poehali.dev/templates/lp/acoustic-guitar-player-in-plant-filled-cafe.jpg" },
              { name: "Иван Купала", desc: "Современное звучание древних славянских напевов", img: "https://cdn.poehali.dev/templates/lp/intimate-music-venue-with-plants-and-warm-lighting.jpg" },
            ].map((artist) => (
              <Card key={artist.name} className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artist.img}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">{artist.name}</h3>
                  <p className="text-sm text-muted-foreground">{artist.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Прикоснитесь к живой традиции</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Народная музыка — это голос истории. Приходите на концерт и услышьте то, что передавалось
            из поколения в поколение на протяжении веков.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Купить билет
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Icon name="MapPin" className="w-4 h-4 mr-2" />
              Как добраться
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">ЖИВАЯ НИТЬ</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Площадка народной музыки — живые концерты, история традиции, встречи с мастерами.
                Голос народной души звучит здесь.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm">
                  ВКонтакте
                </Button>
                <Button variant="outline" size="sm">
                  Рассылка
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Адрес</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>ул. Садовая, 123</p>
                <p>Культурный квартал</p>
                <p>Ежедневно 10:00 — 22:00</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Программа</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Живые концерты</p>
                <p>Лекции об истоках</p>
                <p>Мастер-классы</p>
                <p>Фестивали фольклора</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 Живая Нить. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
