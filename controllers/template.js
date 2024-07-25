document.addEventListener('DOMContentLoaded', function() {
    loadTemplate();
});

const loadTemplate = async () => {
    const BODY = document.querySelector('body');
    BODY.insertAdjacentHTML('beforebegin', `
        <header class="shown">
        <div class="logo">
            <img src="../../resources/img/logo.png" alt="">
        </div>
        <div class="container">
            <div class="nav">
                <div class="input">
                    <input type="text">
                    <div class="icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.25769 0.814432C7.62447 0.814432 6.02793 1.29874 4.66996 2.2061C3.312 3.11347 2.25359 4.40314 1.62858 5.91204C1.00358 7.42093 0.840048 9.08128 1.15867 10.6831C1.4773 12.2849 2.26377 13.7563 3.41862 14.9112C4.57348 16.066 6.04486 16.8525 7.64669 17.1711C9.24853 17.4898 10.9089 17.3262 12.4178 16.7012C13.9267 16.0762 15.2163 15.0178 16.1237 13.6598C17.0311 12.3019 17.5154 10.7053 17.5154 9.07211C17.5152 6.88208 16.6452 4.78179 15.0966 3.23321C13.548 1.68462 11.4477 0.814572 9.25769 0.814432Z"
                                stroke="var(--blue)" stroke-width="1.5" stroke-miterlimit="10" />
                            <path d="M15.4185 15.2329L21.1856 21" stroke="var(--blue)" stroke-width="1.5"
                                stroke-miterlimit="10" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div class="icons">
                    <a href="favorite.html">
                    <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="svg-header-fixer"
                            d="M28.8382 1C22.5832 1 19.5 7.18178 19.5 7.18178C19.5 7.18178 16.4168 1 10.1618 1C5.07848 1 1.05301 5.26351 1.00098 10.351C0.895006 20.9112 9.35734 28.4211 18.6329 34.7323C18.8886 34.9067 19.1907 35 19.5 35C19.8093 35 20.1115 34.9067 20.3671 34.7323C29.6417 28.4211 38.104 20.9112 37.999 10.351C37.947 5.26351 33.9215 1 28.8382 1Z"
                            stroke="var(--blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </a>
                    <a href="carrito.html">
                    <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="svg-header-fixer"
                            d="M13.3441 34.9463C14.1963 34.9463 14.8871 34.2555 14.8871 33.4033C14.8871 32.5511 14.1963 31.8603 13.3441 31.8603C12.4919 31.8603 11.8011 32.5511 11.8011 33.4033C11.8011 34.2555 12.4919 34.9463 13.3441 34.9463Z"
                            stroke="var(--blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path class="svg-header-fixer"
                            d="M34.9464 34.9463C35.7985 34.9463 36.4894 34.2555 36.4894 33.4033C36.4894 32.5511 35.7985 31.8603 34.9464 31.8603C34.0942 31.8603 33.4033 32.5511 33.4033 33.4033C33.4033 34.2555 34.0942 34.9463 34.9464 34.9463Z"
                            stroke="var(--blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 1H7.17206L11.8011 27.2313H36.4894" stroke="var(--blue)" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path class="svg-header-fixer"
                            d="M11.7959 21.0592H35.8113C35.9896 21.0593 36.1622 20.9976 36.3 20.8845C36.4378 20.7715 36.5323 20.6141 36.5672 20.4391L39.34 6.55197C39.3625 6.43999 39.3596 6.32442 39.332 6.21363C39.3045 6.10282 39.2525 5.99955 39.1802 5.91127C39.1079 5.82296 39.017 5.75185 38.9139 5.70305C38.8107 5.65424 38.6983 5.62896 38.5841 5.62905H8.71507"
                            stroke="var(--blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </a>
                    <a href="profile.html">
                    <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="svg-header-fixer"
                            d="M23.9544 8.84607C23.631 13.1671 20.3233 16.6921 16.6921 16.6921C13.0609 16.6921 9.74749 13.168 9.42976 8.84607C9.09964 4.35093 12.3182 1 16.6921 1C21.066 1 24.2847 4.43265 23.9544 8.84607Z"
                            stroke="var(--blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path class="svg-header-fixer"
                            d="M16.6917 21.9231C9.58151 21.9231 2.36503 25.8462 1.02962 33.251C0.868619 34.1435 1.37369 35 2.30783 35H31.0757C32.0106 35 32.5157 34.1435 32.3548 33.251C31.0184 25.8462 23.802 21.9231 16.6917 21.9231Z"
                            stroke="var(--blue)" stroke-width="2" stroke-miterlimit="10" />
                    </svg>
                    </a>
                </div>
            </div>
            <div class="button-navigation">
                <a href="index.html">inicio</a>
                <a href="tienda.html">tienda</a>
                <a href="preguntas-frecuentes.html">preguntas frecuentes</a>
                <a href="conocenos.html">conócenos</a>
                <a href="blog.html">blog</a>
                <a href="galeria.html">galeria</a>
                <a href="contactanos.html">contactarnos</a>
                <a href="wa.me">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0663 3.92349C21.8182 2.67478 20.3354 1.68528 18.7033 1.01193C17.0713 0.33858 15.3221 -0.00530743 13.5566 6.19188e-05C6.14731 6.19188e-05 0.115714 6.00152 0.112701 13.3795C0.109423 15.7288 0.728695 18.037 1.90747 20.0692L0 27L7.12666 25.1395C9.09936 26.2082 11.3076 26.7675 13.5512 26.7668H13.5566C20.9653 26.7668 26.9963 20.7647 27 13.3873C27.0044 11.6278 26.659 9.88504 25.9837 8.26032C25.3083 6.63559 24.3166 5.16139 23.0663 3.92349ZM13.5566 24.5085H13.5518C11.5518 24.5091 9.58806 23.9739 7.86494 22.9584L7.45693 22.7174L3.22794 23.8215L4.35676 19.7179L4.09098 19.296C2.97264 17.5254 2.38012 15.4737 2.38238 13.3795C2.38238 7.24846 7.39727 2.2601 13.5608 2.2601C16.5176 2.25482 19.3553 3.42419 21.45 5.51101C23.5446 7.59784 24.7245 10.4312 24.7303 13.3879C24.7279 19.5196 19.7154 24.5085 13.5566 24.5085ZM19.6853 16.1801C19.3496 16.0126 17.6964 15.2038 17.3903 15.0923C17.0841 14.9808 16.8581 14.9248 16.6345 15.2598C16.4109 15.5949 15.7666 16.3447 15.5708 16.5707C15.3749 16.7967 15.179 16.8214 14.8433 16.6538C14.5077 16.4863 13.4246 16.1337 12.1415 14.9947C11.1429 14.1081 10.4691 13.0137 10.2732 12.6792C10.0774 12.3447 10.2521 12.1633 10.4203 11.997C10.5716 11.8469 10.756 11.6064 10.9241 11.4112C11.0923 11.2159 11.1483 11.0761 11.2598 10.8531C11.3713 10.6301 11.3159 10.4348 11.2321 10.2679C11.1483 10.1009 10.4763 8.45502 10.1967 7.78545C9.92369 7.13335 9.64706 7.22194 9.44094 7.2117C9.24507 7.20205 9.01907 7.19964 8.79668 7.19964C8.62667 7.20407 8.4594 7.24349 8.30531 7.31546C8.15122 7.38742 8.01362 7.49038 7.9011 7.6179C7.59314 7.95299 6.72528 8.76299 6.72528 10.4071C6.72528 12.0512 7.93063 13.6423 8.09697 13.8653C8.26331 14.0882 10.4655 17.465 13.8351 18.9133C14.4608 19.1812 15.1001 19.4162 15.7504 19.6172C16.555 19.8715 17.2872 19.836 17.8658 19.7498C18.5112 19.654 19.8546 18.941 20.1337 18.1599C20.4127 17.3789 20.4133 16.7099 20.3295 16.5707C20.2457 16.4315 20.0216 16.3471 19.6853 16.1801Z" fill="var(--blue)"/>
                        </svg>
                        
                </a>
            </div>

        </div>
    </header>
    `);

    BODY.insertAdjacentHTML('afterend', `
        <footer>
        <div class="main-container">
            <div class="first-row">
                <div class="logo">
                    <img src="../../resources/img/logo.png" alt="">
                </div>
                <div class="container">
                    <span>MIGUITAS</span>
                    <p>Horneamos todos los días para los consentidos de cuatro patitas. ¡Elaboramos pasteles, pupcakes 
                        y galletas de diferentes sabores, tamaño y forma para que cada día puedas consentir a tu perrito o 
                        gatito de la mejor manera: natural!</p>
                </div>
            </div>
            <div class="second-row">
                <div class="main">
                    <span class="title">MENÚ</span>
                    <a href="">Inicio</a>
                    <a href="">Tienda</a>
                    <a href="">Preguntas Frecuentes FAQ</a>
                    <a href="">Conócenos</a>
                    <a href="">Blog</a>
                    <a href="">Galería</a>
                    <a href="contactanos.html">Contáctanos</a>
                </div>
                <div class="main">
                    <span class="title">TÉRMINOS Y CONDICIONES</span>
                    <a href="condiciones-uso.html">Condiciones de Uso</a>
                    <a href="politica-privacidad.html">Política de Privacidad</a>
                    <a href="garantias-cambios.html">Garantías y Cambios</a>
                    <a href="politica-envios.html">Políticas de Envío</a>
                    <a href="reversion-pagos.html">Política de Reversión de pagos y Derecho</a>
                    <a href="reversion-pagos.html">de retracto</a>
                    <a href="restricciones-promociones.html">Restricciones y Políticas de Promociones</a>
                </div>
                <div class="main contact">
                    <span class="title">CONTÁCTANOS</span>
                    <a href="" class="wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); --darkreader-inline-fill: #e8e6e3;" data-darkreader-inline-fill=""><path d="M2.002 9.538c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.645a.997.997 0 0 0-.686.893z"></path></svg>
                        <div>
                            <p>Antiguo Cuscatlán, Col Cumbres de Cuscatlán, La Libertad, El Salvador.</p>
                        </div>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); --darkreader-inline-fill: #e8e6e3;" data-darkreader-inline-fill=""><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg>
                        <span>(503) 2243-4190</span>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); --darkreader-inline-fill: #e8e6e3;" data-darkreader-inline-fill=""><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg>
                        <span>(503) 7910-1241</span>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); --darkreader-inline-fill: #e8e6e3;" data-darkreader-inline-fill=""><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
                        <span>administracion@miguitassv.com</span>
                    </a>
                </div>
                <div class="info">
                    <span>Sigamos en contacto</span>
                    <div class="icons">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0C7.16392 0 0 7.20717 0 16.0966C0 24.1296 5.85019 30.7878 13.5006 32V20.7506H9.43614V16.0966H13.5006V12.5502C13.5006 8.51273 15.8896 6.28635 19.5428 6.28635C21.2933 6.28635 23.1271 6.60026 23.1271 6.60026V10.5588H21.1045C19.1203 10.5588 18.4995 11.8016 18.4995 13.075V16.0934H22.9335L22.2246 20.7474H18.4995V31.9968C26.1498 30.791 32 24.1312 32 16.0966C32 7.20717 24.8361 0 16 0Z" fill="white"/>
                        </svg>
    
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="white"/>
                                <path d="M24.8917 23.9234C24.8948 23.9225 24.8941 23.9225 24.8905 23.9237L24.8917 23.9234ZM24.7864 24.2674C24.7864 24.2675 24.786 24.2668 24.785 24.2653C24.7858 24.2666 24.7863 24.2674 24.7864 24.2674ZM24.7839 24.2636L24.7838 24.2635L24.7843 24.2643L24.7839 24.2636ZM12.5469 14.8228L12.5469 14.8228L12.545 14.8202C12.0226 14.0953 11.0938 12.8457 10.1773 11.6127C9.77146 11.0666 9.36801 10.5238 9.00332 10.0313C9.0031 10.031 9.00289 10.0307 9.00268 10.0304L6.8312 7.15051L6.52921 6.75H7.03082H9.61966H12.1931H12.3189L12.3939 6.85108L14.7824 10.0717L14.7827 10.072C15.4372 10.9576 16.0413 11.7656 16.4872 12.3519C16.7103 12.6452 16.8931 12.8819 17.0224 13.0448C17.0378 13.0642 17.0524 13.0824 17.0661 13.0995C17.0884 13.0773 17.1127 13.053 17.1389 13.0266C17.2996 12.8647 17.5276 12.6295 17.8066 12.3381C18.3641 11.7555 19.1222 10.9512 19.9461 10.0658L22.9508 6.82989L23.025 6.75H23.134H23.7967H24.4593H25.0357L24.6418 7.17085L22.1608 9.82133L22.1608 9.82141C20.7895 11.285 19.2666 12.9311 18.7599 13.4992C18.7597 13.4994 18.7595 13.4996 18.7593 13.4998L18.0007 14.3631L21.5001 19.039C22.5018 20.3719 23.4188 21.5933 24.0893 22.4892C24.4245 22.9371 24.6983 23.3039 24.8902 23.5627C24.9862 23.692 25.062 23.7948 25.115 23.8674C25.1414 23.9036 25.1626 23.933 25.178 23.9548C25.1856 23.9655 25.1925 23.9754 25.1981 23.9837L25.1985 23.9843C25.2013 23.9883 25.2131 24.0056 25.2222 24.0239L24.9986 24.1357L25.213 24.0071C25.2476 24.0647 25.2639 24.1439 25.2357 24.2249C25.212 24.293 25.1671 24.3322 25.1445 24.3492C25.1006 24.3824 25.0534 24.397 25.0338 24.4028C24.9839 24.4176 24.9211 24.4277 24.8582 24.4355C24.7269 24.4519 24.5379 24.4653 24.3091 24.4759C23.8491 24.4974 23.2053 24.509 22.4868 24.509L22.4853 24.509L19.8965 24.4935L19.7714 24.4928L19.697 24.3922L17.201 21.018C17.2009 21.0179 17.2008 21.0178 17.2007 21.0176C16.5081 20.0864 15.8661 19.2407 15.3881 18.6283C15.1488 18.3218 14.9519 18.0754 14.8108 17.9064C14.7831 17.8732 14.7579 17.8435 14.7353 17.8171C14.7026 17.8481 14.6651 17.8841 14.623 17.9251C14.449 18.0948 14.2049 18.3418 13.9079 18.6484C13.3143 19.2612 12.5144 20.1073 11.6524 21.0385C11.6524 21.0385 11.6524 21.0386 11.6523 21.0386L8.52438 24.4285L8.45014 24.509H8.34065H7.66262H7H6.42828L6.81646 24.0892L8.71186 22.0397L8.71185 22.0397L8.71365 22.0378C9.26523 21.4538 9.89609 20.7818 10.4503 20.1914C10.9453 19.6641 11.3791 19.202 11.6406 18.9259C11.8275 18.7235 12.0357 18.4998 12.2432 18.2769C12.656 17.8334 13.066 17.3929 13.3003 17.1281L13.3002 17.1281L13.3031 17.125L13.8267 16.5526L12.5469 14.8228ZM22.5874 22.8331L22.5818 22.8275L22.5765 22.8215C22.4835 22.7158 21.7863 21.7974 20.8023 20.492C19.8123 19.1785 18.5201 17.4572 17.2265 15.7292C14.6564 12.2961 12.0653 8.81605 11.8466 8.47972C11.7763 8.37832 11.7375 8.32734 11.6988 8.29254C11.6684 8.26523 11.6325 8.2431 11.5599 8.22478C11.4792 8.20443 11.3604 8.19062 11.167 8.18307C10.9756 8.17559 10.7264 8.17459 10.3902 8.17459C10.0503 8.17459 9.7982 8.17558 9.61239 8.18145C9.56334 8.183 9.52047 8.18487 9.48306 8.187C9.74954 8.53993 10.5944 9.67227 11.7599 11.2345C12.7049 12.501 13.8607 14.0502 15.0901 15.6956C15.0901 15.6956 15.0901 15.6956 15.0901 15.6956L20.4855 22.9149H21.7163V22.9148L21.7215 22.9149C22.0857 22.9225 22.413 22.9148 22.6462 22.8982C22.6472 22.8981 22.6481 22.898 22.6491 22.898C22.6296 22.8764 22.609 22.8547 22.5874 22.8331ZM9.26785 8.21352C9.26789 8.21354 9.26866 8.21328 9.27006 8.21268C9.26852 8.2132 9.26782 8.2135 9.26785 8.21352ZM9.35535 8.00476C9.35533 8.00476 9.35553 8.00526 9.356 8.00629L9.35535 8.00476Z" fill="#6E83BE" stroke="#6E83BE" stroke-width="0.5"/>
                        </svg>

                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="16" fill="white"/>
                                    <path d="M15.997 11.372C14.7706 11.372 13.5945 11.8592 12.7273 12.7263C11.8602 13.5935 11.373 14.7696 11.373 15.996C11.373 17.2224 11.8602 18.3985 12.7273 19.2657C13.5945 20.1328 14.7706 20.62 15.997 20.62C17.2234 20.62 18.3995 20.1328 19.2667 19.2657C20.1338 18.3985 20.621 17.2224 20.621 15.996C20.621 14.7696 20.1338 13.5935 19.2667 12.7263C18.3995 11.8592 17.2234 11.372 15.997 11.372ZM15.997 18.999C15.2003 18.999 14.4362 18.6825 13.8729 18.1191C13.3095 17.5558 12.993 16.7917 12.993 15.995C12.993 15.1983 13.3095 14.4342 13.8729 13.8708C14.4362 13.3075 15.2003 12.991 15.997 12.991C16.7937 12.991 17.5578 13.3075 18.1212 13.8708C18.6845 14.4342 19.001 15.1983 19.001 15.995C19.001 16.7917 18.6845 17.5558 18.1212 18.1191C17.5578 18.6825 16.7937 18.999 15.997 18.999Z" fill="#6E83BE"/>
                                    <path d="M20.804 12.28C21.3994 12.28 21.882 11.7974 21.882 11.202C21.882 10.6066 21.3994 10.124 20.804 10.124C20.2086 10.124 19.726 10.6066 19.726 11.202C19.726 11.7974 20.2086 12.28 20.804 12.28Z" fill="#6E83BE"/>
                                    <path d="M24.531 10.106C24.2995 9.50818 23.9457 8.96528 23.4923 8.51206C23.0389 8.05883 22.4959 7.70527 21.898 7.474C21.1983 7.21136 20.4592 7.06934 19.712 7.054C18.749 7.012 18.444 7 16.002 7C13.56 7 13.247 7 12.292 7.054C11.5454 7.06856 10.8068 7.2106 10.108 7.474C9.50994 7.705 8.96676 8.05847 8.51333 8.51173C8.0599 8.96499 7.70623 9.50802 7.475 10.106C7.2123 10.8056 7.07061 11.5448 7.056 12.292C7.013 13.254 7 13.559 7 16.002C7 18.444 7 18.755 7.056 19.712C7.071 20.46 7.212 21.198 7.475 21.899C7.70688 22.4968 8.0609 23.0396 8.51444 23.4928C8.96798 23.946 9.51106 24.2996 10.109 24.531C10.8064 24.8042 11.5454 24.9564 12.294 24.981C13.257 25.023 13.562 25.036 16.004 25.036C18.446 25.036 18.759 25.036 19.714 24.981C20.4611 24.9658 21.2002 24.8241 21.9 24.562C22.4978 24.3302 23.0406 23.9763 23.494 23.523C23.9473 23.0696 24.3012 22.5268 24.533 21.929C24.796 21.229 24.937 20.491 24.952 19.743C24.995 18.781 25.008 18.476 25.008 16.033C25.008 13.59 25.008 13.28 24.952 12.323C24.9404 11.5653 24.7979 10.8152 24.531 10.106ZM23.313 19.638C23.3066 20.2143 23.2014 20.7852 23.002 21.326C22.8518 21.7149 22.6219 22.068 22.3271 22.3627C22.0322 22.6574 21.679 22.8871 21.29 23.037C20.7552 23.2354 20.1904 23.3406 19.62 23.348C18.67 23.392 18.402 23.403 15.966 23.403C13.528 23.403 13.279 23.403 12.311 23.348C11.7409 23.341 11.1763 23.2358 10.642 23.037C10.2517 22.888 9.897 22.6587 9.60089 22.364C9.30478 22.0692 9.07384 21.7156 8.923 21.326C8.72645 20.791 8.62131 20.2268 8.612 19.657C8.569 18.707 8.559 18.439 8.559 16.003C8.559 13.566 8.559 13.317 8.612 12.348C8.61846 11.772 8.72366 11.2014 8.923 10.661C9.228 9.872 9.853 9.251 10.642 8.949C11.1766 8.75114 11.741 8.64596 12.311 8.638C13.262 8.595 13.529 8.583 15.966 8.583C18.403 8.583 18.653 8.583 19.62 8.638C20.1904 8.64486 20.7554 8.75007 21.29 8.949C21.6789 9.09927 22.0321 9.3292 22.327 9.62403C22.6218 9.91886 22.8517 10.2721 23.002 10.661C23.1986 11.1959 23.3037 11.7602 23.313 12.33C23.356 13.281 23.367 13.548 23.367 15.985C23.367 18.421 23.367 18.683 23.324 19.639H23.313V19.638Z" fill="#6E83BE"/>
                        </svg>
                    </div>
                    <div class="images">
                        <img src="../../resources/img/sello1.png" alt="">
                        <img src="../../resources/img/sello2.png" alt="">
                    </div>
                </div>
            </div>
            <div class="third-row">
                <div class="main-container-t">
                    <div class="text">
                        <span>Miguitas Pet Treats® NIT: 0614-120690-129-7</span>
                        <span>Patricia Eugenia Solórzano Rivera</span>
                        <span>Miguitas Pet Treats © 2020 Desarrollado X Innovadesa.</span>
                    </div>
                    <div class="img">
                        <img class="one" src="../../resources/img/visa.png" alt="">
                        <img class="two" src="../../resources/img/visa.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `);
};

window.addEventListener('scroll', function() {
    if (window.scrollY < 20) {
        document.querySelector("header").classList.add("shown");
    } else{
        document.querySelector("header").classList.remove("shown");
    }
});

window.addEventListener('load', function() {
    // Obtener altura del header
    var headers = document.getElementsByTagName('header');
    var headerHeight = headers.length > 0 ? headers[0].offsetHeight : 0;

    // Obtener altura del footer
    var footers = document.getElementsByTagName('footer');
    var footerHeight = footers.length > 0 ? footers[0].offsetHeight : 0;

    // Calcular altura para el main
    var windowHeight = window.innerHeight;
    var mainHeight = windowHeight - headerHeight - footerHeight;

    // Setear la altura mínima del main
    var mains = document.getElementsByTagName('main');
    if (mains.length > 0) {
      mains[0].style.minHeight = mainHeight + 'px';
    }
  });