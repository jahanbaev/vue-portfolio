<template>
    <div>
        <div class="container about-contanier">
            <h1 class="container-title"
                data-aos="fade-up"
                data-aos-delay="1000"
            >
                About me
            </h1>
            <div class="about-card flex">
                <div>
                    <h2>
                        I am a web developer with 3 years of experience in various projects.
                    </h2>
                    <h3>
                        I can create beautiful and functional websites using HTML, CSS and JavaScript woht using Vue and ReactJs. 
                        I also know back-end programming languages such as PHP and Node.
                        I have skills in multitasking, self-motivation, organization and attention to detail. 
                        I always strive to learn new things and develop my professional competencies.
                    </h3>
                </div>
                <div class="hire-me-card">
                    <div class="bg-blur">
                        <h1 class="numbers">
                            40<span>+</span>
                        </h1>
                        <p class="number-name">
                           Projects
                        </p>
                    </div>
                    <div class="bg-white">
                        <img src="@/assets/spheres/sphere_white.png" alt="" class="sphere-white">
                    </div>
                    <div class="bg-blur">
                        <h1 class="numbers">
                            4<span>+</span>
                        </h1>
                        <p class="number-name">
                           Years experience
                        </p>
                    </div>
                    <div class="bg-blur">
                        <h1 class="numbers">
                            120<span>+</span>
                        </h1>
                        <p class="number-name">
                            Cups of coffee
                        </p>
                    </div>
                </div>
            </div>

            <img src="@/assets/spheres/RoundCube-Blue-Glossy.png"
                class="decor left-top"
                data-aos="fade-up"
                alt="">
            <img src="@/assets/spheres/SuperToroid-White-Glossy.png"
                class="decor right-bottom"
                data-aos="fade-up"
                alt="">
        </div>
    </div>
</template>

<style>
.about-contanier {
    margin-top: 100px;
}

.about-card {
    width: 100%;
    color: var(--raisin-black);
    position: relative;
    padding: 12px 16px;
    z-index: 1;
    background: rgba(33, 34, 38, 0.059);
    margin-top: 40px;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    backdrop-filter: blur(5px);
    box-shadow: 1px 1px 0px #ffffff60;
}
.about-card::after,
.about-card::before {
    content: "";
    display: block;
    width: 50%;
    height: 140px;
    position: absolute;
    left: -50px;
    top: -50px;
    border-radius: 50%;
    background: #2affdc;
    opacity: 0.5;
    filter: blur(40px);
    transform: rotate(-10deg);
}

.about-card::before {
    width: 50%;
    height: 140px;
    position: absolute;
    right: 150px;
    top: -20px;
    background: #a851ff;
    opacity: 0.5;
    filter: blur(40px);
    transform: rotate(-20deg);
}
.about-card h2,
.about-card h3 {
    position: relative;
    z-index: 33;
}
.about-card h2 {
    font-size: 34px;
}
.about-card h3 {
    font-size: 19px;
    line-height: 27px;
    font-weight: 300;
    opacity: 0.7;
}
.hire-me-card {
    min-width: 520px;
    
    margin-left: 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 12px;
}
.hire-me-card div {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #0b2545;
    border-radius: 10px;
    padding: 8px 14px;
}
.hire-me-card .bg-blur {
    background: #ffffff52;
    backdrop-filter: blur(10px);
    box-shadow: -1px -1px 0px #ffffffa0,
                2px 2px 0px #ffffff3c;;
}
.hire-me-card div .numbers {
    font-family: 'Orbitron', sans-serif;
    font-size: 60px;
    margin-top: 0;
}
.hire-me-card .bg-white {
    position: relative;
    overflow: hidden;
}
.hire-me-card .bg-white .sphere-white {
    width: 200px;
    position: absolute;
    right: -60px;
    top: -70px;
}
.hire-me-card div .numbers span {
    color: var(--violet);
    margin: 0;
}
.hire-me-card div .number-name {
    font-size: 23px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 0;
    color: var(--violet);
    font-weight: 600;
    text-align: end;
}

.about-contanier .left-top {
    top: 200px;
    left: -186px;
    z-index: 3;
}
</style>