import styles from '../styles/about.module.css';

export default function About()
{
    return (
        <>
            
            <section className={`${styles.about} "aboutSection"`}>

                <div className={styles.content}>
                    <div className={styles.text}>

                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat vitae quae odit corporis voluptatum consectetur, esse sint, nulla aut, laborum iure laudantium? Fugit incidunt sunt ratione similique ipsa ullam!</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat vitae quae odit corporis voluptatum consectetur, esse sint, similique ipsa ullam!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat vitae quae odit corporis voluptatum consectetur, esse sint, nulla aut, laborum iure laudantium? Fugit incidunt sunt ratione similique ipsa ullam!</p>
                        <br />


                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat vitae quae odit corporis voluptatum consectetur, esse sint, nulla aut, laborum iure laudantium? Fugit incidunt sunt ratione similique ipsa ullam!</p>


                    </div>

                    <div className={styles.aboutImage}>
                            <img src="/favicon.ico" alt="demo_next_js" />
                    </div>
                </div>


            </section>

        </>
    )
}