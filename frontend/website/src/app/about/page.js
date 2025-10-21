import styles from './about.module.css';

export function About() {
    return (
        <>

            <div className={styles.container}>
                <img src="images/media/profile.jpg" className={styles.photo}/>
                <div>
                    <p>
                        Olá! Meu nome é <strong>Max Dias Vieira Peixoto</strong>, tenho 26 anos e sou apaixonado pela
                        programação. Minha jornada nesse mundo começou aos 20 anos, quando ingressei na <strong>ESSA
                        Escola
                        Técnica Profissionalizante</strong>, onde me formei em 2021. Atualmente, estou cursando <strong>Análise
                        e Desenvolvimento de Sistemas</strong> na Uninter.
                    </p>

                    <p>
                        Ao longo dessa trajetória, busquei expandir meu conhecimento por meio de cursos na Udemy, que me
                        permitem estudar no conforto de casa. Alguns dos cursos que concluí incluem <strong>Excel (50
                        horas)</strong>, <strong>Django (50 horas)</strong>, <strong>Python 3 (120
                        horas)</strong> e <strong>Desenvolvimento
                        Web (120 horas)</strong>. Recentemente, aprendi <strong>React</strong> e já aplico meus
                        conhecimentos
                        neste site, que está sendo desenvolvido de forma dinâmica e interativa. Meu próximo passo será
                        estudar <strong>Next.js</strong> para torná-lo ainda mais avançado.
                    </p>

                    <p>
                        Possuo conhecimento em <strong>HTML, CSS, Bootstrap, MySQL, Python, Django e React</strong>, e
                        aplico
                        todas essas tecnologias em meus projetos pessoais. Meu objetivo é criar soluções práticas e
                        funcionais,
                        sempre aprendendo na prática.
                    </p>

                    <p>
                        Atualmente, estou em busca da minha primeira oportunidade na área de TI, em um estágio que me
                        permita me
                        dedicar completamente à programação e transformar meu sonho em realidade.
                    </p>

                    <p>
                        Agradeço a todos que visitam meu site e acompanham minha jornada! Para conhecer meus projetos,
                        acesse
                        meu perfil no GitHub: <strong><a href="https://github.com/maxdias21" target="_blank"
                                                         rel="noopener noreferrer">Max Dias no GitHub</a></strong>.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;