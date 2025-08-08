import Header from "./components/Header";
import TextDefault from "./components/TextDefault";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="py-4">
          <div className="flex justify-center bg-red-100 h-[500px]">
            <div className="flex justify-center items-center w-1/2 border border-red-500">
              <div className="border border-b-amber-950 w-48 h-45 bg-amber-950 relative ">
                <img
                  src="src/img/arara.jpg"
                  className="w-64 h-96 border-4 border-white absolute top-1 right-4"
                  alt="arara"
                />
              </div>
            </div>
            <TextDefault
              title="Ponte dos Ingleses"
              subtitle="Turismo, lazer e cidadania"
              text="At Lorem Ipsum, our team is a diverse mix of creatives, tinkerers, developers, designers, hackers, and tech enthusiasts. Just like the classic placeholder text, ‘Lorem Ipsum,’ which represents the blend of structure and creativity, we embody that spirit by crafting innovative solutions that balance form and function. We thrive on inventing and building with a strong creative vision, ensuring that optimization, security, and usability are always non-negotiable."
              buttonText="LER MAIS"
            />
          </div>
        </section>
        <section>
          <h3>A volta da Ponte</h3>
          <h4>Ícone cultural da cidade</h4>
          <p>
            At Lorem Ipsum, our team is a diverse mix of creatives, tinkerers,
            developers, designers, hackers, and tech enthusiasts. Just like the
            classic placeholder text, ‘Lorem Ipsum,’ which represents the blend
            of structure and creativity, we embody that spirit by crafting
            innovative solutions that balance form and function. We thrive on
            inventing and building with a strong creative vision, ensuring that
            optimization, security, and usability are always non-negotiable.
          </p>
          <button>Ler mais</button>
        </section>
        <section>
          <h3>Sanfonas</h3>
          <h4>O som do coração</h4>
          <p>
            At Lorem Ipsum, our team is a diverse mix of creatives, tinkerers,
            developers, designers, hackers, and tech enthusiasts. Just like the
            classic placeholder text, ‘Lorem Ipsum,’ which represents the blend
            of structure and creativity, we embody that spirit by crafting
            innovative solutions that balance form and function. We thrive on
            inventing and building with a strong creative vision, ensuring that
            optimization, security, and usability are always non-negotiable.
          </p>
          <button>Ler mais</button>
        </section>
        <section>
          <h3>Bodegas</h3>
          <h4>Tradição & resiliência</h4>
          <p>
            At Lorem Ipsum, our team is a diverse mix of creatives, tinkerers,
            developers, designers, hackers, and tech enthusiasts. Just like the
            classic placeholder text, ‘Lorem Ipsum,’ which represents the blend
            of structure and creativity, we embody that spirit by crafting
            innovative solutions that balance form and function. We thrive on
            inventing and building with a strong creative vision, ensuring that
            optimization, security, and usability are always non-negotiable.
          </p>
          <button>Ler mais</button>
        </section>
        <section>
          <div>
            <button>Ver todas as matérias</button>
          </div>
        </section>
        {/* outras materias */}
        <section>
          <div>
            <img src="#" alt="" />
            <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
            <button>Acessar</button>
          </div>
          <div>
            <img src="#" alt="" />
            <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
            <button>Acessar</button>
          </div>
          <div>
            <img src="#" alt="" />
            <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
            <button>Acessar</button>
          </div>
          <div>
            <img src="#" alt="" />
            <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
            <button>Acessar</button>
          </div>
          <div>
            <img src="#" alt="" />
            <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
            <button>Acessar</button>
          </div>
          <div>
            <img src="#" alt="" />
            <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
            <button>Acessar</button>
          </div>
        </section>
        {/* Audiovisual */}
        <section>
          <div>
            <h3>Audiovisual</h3>
          </div>
          <div>
            <h3>Elas são donas do negócio</h3>
            <p>
              At Lorem Ipsum, our team is a diverse mix of creatives, tinkerers,
              developers, designers, hackers, and tech enthusiasts. Just like
              the classic placeholder text, ‘Lorem Ipsum,’ which represents the
              blend of structure and creativity, we embody that spirit by
              crafting innovative solutions that balance form and function. We
              thrive on inventing and building with a strong creative vision,
              ensuring that optimization, security, and usability are always
              non-negotiable.
            </p>
            <video src="#"></video>
          </div>
        </section>
      </main>
      <footer>
        <h1>NOSSA VOZ</h1>
        <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
      </footer>
    </>
  );
}

export default App;
