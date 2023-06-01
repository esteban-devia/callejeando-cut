<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/global.css">
    <link rel="stylesheet" href="styles/home.css">

    <title>Callejeando- Home</title>
</head>

<body>
    <nav>
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="restaurantes.html">Restaurantes</a></li>
            <li><a href="alterno.html">Alterno</a></li>
            <li><a href="tour.html">Tour</a></li>
            <li id="alcaldia"><a href="#">Alcaldía</a>
                <ul class="submenu">
                    <li><a href="alcaldia.html">Medellín</a></li>
                    <li><a href="#">Bello</a></li>
                    <li><a href="#">Envigado</a></li>
                    <li><a href="#">Itagüi</a></li>
                    <li><a href="#">La Estrella</a></li>
                    <li><a href="#">Sabaneta</a></li>
                </ul>
            </li>
        </ul>
        <div class="lang">
            <a href="#">Esp</a>
            <a href="#">Eng</a>
        </div>
    </nav>
    <div class="menu"><img src="assets/icons/Menu.svg" alt="menu"></div>
    <main>
        <section class="hero">
            <div class="hero-text">
                <div class="title">
                    <h1>Callejeando</h1>
                    <p>en <span>Valle de Aburra</span></p>
                </div>
                <div class="title-items">
                    <ul>
                        <li><img src="assets/icons/Fire.svg" alt="fire icon">
                            <p>Encuentra los mejores planes de la ciudad</p>
                        </li>
                        <li><img src="assets/icons/Info-triangle.svg" alt="info icon">
                            <p>¿Restricciones COVID? Enterate</p>
                        </li>
                        <li><img src="assets/icons/Location-question.svg" alt="location icon">
                            <p>Descubre sitios que no conocías</p>
                        </li>
                        <li><img src="assets/icons/Diamond.svg" alt="diamond icon">
                            <p>Planes gratuitos para que disfrutes sin gastar</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hero-img">
                <picture>
                    <source media="(max-width: 1024px)" srcset="assets/home/home-hero-mov.jpg">
                    <img src="assets/home/home-hero.jpg" alt="cervezas">
                </picture>
            </div>
        </section>
        <section class="content">
            <div class="content-title">
                <h2>¿Sin parche?</h2>
                <p>Aquí encuentras toda la información para armarlo</p>
            </div>

            <div class="content-info">
                <div class="content-intro">
                    <p>Hemos reunido en un solo lugar, todo lo que necesitas para planear la salida de esta noche o del
                        fin de semana. ¿No sabes a dónde llevar a tu pareja a comer?, ¿Qué tal un picnic para celebrar
                        unos cumpleaños?, ¿O tienes ganas de puebliar este fin de semana? Aquí lo encuentras todo.</p>
                </div>
                <div class="plan">
                    <div class="title-items">
                        <ul>
                            <li><img src="assets/icons/Book-open.svg" alt="book icon">
                                <p><strong>Restaurantes: </strong>Puedes filtrar tu búsqueda por tipo (romantico o
                                    familiar) por cocina (mediterranea, italiana, americana, colombiana...) y por
                                    precios por persona.</p>
                            </li>
                            <li><img src="assets/icons/Pulse.svg" alt="pulse icon">
                                <p><strong>Alterno: </strong>Encuentra bares, conoce parques o entérate de planes
                                    alternativos como conciertos, museos u obras de teatro.</p>
                            </li>
                            <li><img src="assets/icons/Globe.svg" alt="globe icon">
                                <p><strong>Tour: </strong>Una lista con los sitios más emblematicos de la ciudad y otros
                                    no tan conocidos. Y si quieres puebliar, te damos toda la información que necesitas
                                    patra viajar (distancias, tiempos de viaje, costos de peajes, lugares que visitar en
                                    tu destino).</p>
                            </li>
                            <li><img src="assets/icons/Bank.svg" alt="bank icon">
                                <p><strong>Alcaldía: </strong>Hay muchos eventos organizados por la Secretaría de
                                    Cultura que te pueden interesar, algunos incluso son gratuitos.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="plan-img">
                        <img src="assets/home/plan.jpg" alt="Home plan">
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="content-title">
                <h2>Eventos</h2>
                <p>Planea tu salida</p>
            </div>
            <div class="content-info">
                <div class="content-intro centered">
                    <p>Preparamos una agenda semanal con todos los eventos que hay en la ciudad, filtra por categoría,
                        selecciona un día y encuentra tu mejor plan. Elige el evento que te interesa y consigue más
                        información. ¿Qué quieres hacer hoy?</p>
                </div>
                <div class="agenda">
                    <div class="agenda-filter">
                        <select name="category" id="category">
                            <option value="Restaurante">Restaurante</option>
                            <option value="Bares">Bares</option>
                            <option value="Teatro">Teatro</option>
                        </select>
                        <span class="selectName">Categoría</label>
                    </div>
                    <div class="events">
                        <div class="schedule">
                            <span class="date">Diciembre 2021</span>
                            <div class="days">
                                <div class="single-day">
                                    <p>Lun</p>
                                    <span>23</span>
                                    <img src="assets/icons/Cross.svg" alt="cross icon">
                                    <p class="number-events">0 eventos</p>
                                </div>
                                <div class="single-day">
                                    <p>Mar</p>
                                    <span>24</span>
                                    <img src="assets/icons/Cross.svg" alt="cross icon">
                                    <p class="number-events">0 eventos</p>
                                </div>
                                <div class="single-day">
                                    <p>Mie</p>
                                    <span>25</span>
                                    <img src="assets/icons/Cross.svg" alt="cross icon">
                                    <p class="number-events">0 eventos</p>
                                </div>
                                <div class="single-day">
                                    <p>Jue</p>
                                    <span>26</span>
                                    <img src="assets/icons/Cross.svg" alt="cross icon">
                                    <p class="number-events">0 eventos</p>
                                </div>
                                <div class="single-day">
                                    <p>Vie</p>
                                    <span>27</span>
                                    <img src="assets/icons/Cross.svg" alt="cross icon">
                                    <p class="number-events">0 eventos</p>
                                </div>
                                <div class="single-day">
                                    <p>Sab</p>
                                    <span>28</span>
                                    <img src="assets/icons/Cross.svg" alt="cross icon">
                                    <p class="number-events">0 eventos</p>
                                </div>
                                <div class="single-day">
                                    <p>Dom</p>
                                    <span>29</span>
                                    <img src="assets/icons/Cross.svg" alt="cross icon">
                                    <p class="number-events">0 eventos</p>
                                </div>


                            </div>
                        </div>
                        <div class="events-list">
                            <ul>
                                <li class="singleEvent" id="1">Ballet "El Cascanueces" en Teatro Cristales</li>
                                <li class="singleEvent" id="2">HipHop al Parque en Parque Ditaires</li>
                                <li class="singleEvent" id="3">Tributo a Soda Stereo en Rock 90's Bar</li>
                                <li class="singleEvent" id="4">Ciclovía Nocturna</li>
                                <li class="singleEvent" id="5">Lorem Ipsum</li>
                                <li class="singleEvent" id="6">Lorem Ipsum</li>
                                <li class="singleEvent" id="7">1er Concurso Skateboard Freestyle Envigado</li>
                            </ul>
                        </div>

                    </div>
                    <div class="pagination">
                        <span>&#60;</span>
                        <span>1</span>
                        <span>2</span>
                        <span>&#62;</span>
                    </div>
                </div>
            </div>

        </section>
        <section class="content">
            <div class="content-title">
                <h2>Únete a CALLEJEANDO</h2>
                <p>Aparece en nuestra agenda y logra más asistencia a tus eventos</p>
            </div>
            <div class="content-info">
                <div class="content-intro long">
                    <p>Llega a más personas uniendote a Callejeando.</p>
                    <p>Las redes sociales agrupan al público basados en sus preferencias, sesgando tu audiencia y
                        limitando la cantidad de personas a las que puedes llegar, en el mismo sentido el trafico en tu
                        página web depende de las interacciones con tus redes sociales o la búsqueda orgánica en motores
                        de búsqueda como Google, limitando tu público potencial.</p>
                    <p>Aquí nos reunimos todo el mundo, personas de diferentes gustos, con diferentes intereses y todas
                        podrán ver tu marca y enterarse de tus eventos.</p>
                    <p>Registrate a continuación y con gusto te envíamos los planes que tenemos para tí, o también
                        puedes escribirnos por Whatsapp</p>
                </div>
                <form action="" name="contactForm">
                    <div>
                        <span>Nombre Completo*</span>
                        <input type="text" name="name" id="name" placeholder="Ingresa tu nombre">
                        <p class="errorForm"></p>
                    </div>
                    <div>
                        <span>Correo Electrónico*</span>
                        <input type="email" name="email" id="email" placeholder="Ingresa tu correo electrónico">
                        <p class="errorForm"></p>
                    </div>
                    <button form="contactForm" onclick="return validateForm()">Enviar</button>
                </form>
            </div>
        </section>
        <section class="content">
            <div class="content-title">
                <h2>Nuestros Aliados</h2>
                <p>Ellos nos invitan a callejear</p>
            </div>
            <div class="content-info">
                <div class="allies">
                    <div class="allies-line">
                        <div>
                            <img src="" alt="">
                        </div>
                        <div class="spaned">
                            <img src="" alt="">
                        </div>
                        <div>
                            <img src="" alt="">
                        </div>
                        <div class="spaned">
                            <img src="" alt="">
                        </div>
                        <div>
                            <img src="" alt="">
                        </div>
                        <div class="spaned">
                            <img src="" alt="">
                        </div>
                        <div>
                            <img src="" alt="">
                        </div>
                        <div>
                            <img src="" alt="">
                        </div>
                        <div class="spaned">
                            <img src="" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="modal modal-events">
            <div class="close">
                <img src="assets/icons/Cancel.svg" alt="">
            </div>
            <div class="modal-info">
                <div class="galery">
                    <div class="single-img">
                        <div class="images">
                            <img src="assets/home/event-galery.jpg" alt="">
                            <img src="assets/home/event-galery.jpg" alt="">
                            <img src="assets/home/event-galery.jpg" alt="">
                        </div>
                    </div>
                    <div class="galery-pag">
                        <img id="prev" src="assets/icons/Icon-prev.svg" alt="" onclick="prevImg()">
                        <span class="active"></span>
                        <span></span>
                        <span></span>
                        <img id="next" src="assets/icons/Icon-next.svg" alt="" onclick="nextImg()">
                    </div>
                </div>
                <div class="event-text">
                    <div>
                        <h2>Tributo a Soda Stereo</h2>
                        <p class="event-sub">En Rock 90's Bar</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sed quae eius cupiditate
                            reprehenderit quidem rerum repellendus a ipsam delectus amet eum eos, aperiam libero
                            provident magni. Harum, animi praesentium.</p>
                    </div>
                    <div class="details">
                        <div>
                            <img src="assets/icons/Clock.svg" alt="">
                            <p>Viernes 27 de Diciembre</p>
                        </div>
                        <div>
                            <img src="assets/icons/Home.svg" alt="">
                            <p>Calle XX # XX-XX, Medellín</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal modalForm">
            <div class="close">
                <img src="assets/icons/Cancel.svg" alt="">
            </div>
            <div class="modal-content">
                <h2>Gracias</h2>
                <span>Por contactarnos</span>
                <p>Al correo electrónico que registraste, te llegarán las propuestas que te ofrecemos para ser parte
                    de <strong>Callejeando</strong></p>
            </div>
        </div>
    </main>
    <footer>
        <p class="brand">Callejeando</p>
        <p class="legal">Todos los eventos de tu ciudad, 2021</p>
    </footer>
    <script src="js/global.js"></script>
    <script src="js/home.js"></script>
</body>

</html>