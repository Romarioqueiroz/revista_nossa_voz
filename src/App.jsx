import Header from "./components/Header";
import TextDefault from "./components/TextDefault";
import ThirdTextDefault from "./components/ThirdTextDefault";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="py-4">
          <div className="flex justify-center bg-red-100 h-[500px]">
            <div className="flex justify-center items-center w-1/2">
              <img
                src="src/img/arara.jpg"
                className="w-64 h-96 border-4 border-white  top-1 right-4"
                alt="arara"
              />
            </div>
            <TextDefault
              title="Ponte dos Ingleses"
              subtitle="Turismo, lazer e cidadania"
              text="At Lorem Ipsum, our team is a diverse mix of creatives, tinkerers, developers, designers, hackers, and tech enthusiasts. Just like the classic placeholder text, ‘Lorem Ipsum,’ which represents the blend of structure and creativity, we embody that spirit by crafting innovative solutions that balance form and function. We thrive on inventing and building with a strong creative vision, ensuring that optimization, security, and usability are always non-negotiable."
              buttonText="LER MAIS"
              titleColor="text-cyan-600"
              buttonColor="bg-cyan-600"
              subtitleColor="text-yellow-400"
            />
          </div>
        </section>

        <section className="py-4">
          <div className="flex justify-center h-[500px] px-7">
            <TextDefault
              title="Ponte dos Ingleses"
              subtitle="Turismo, lazer e cidadania"
              text="At Lorem Ipsum, our team is a diverse mix of creatives, tinkerers, developers, designers, hackers, and tech enthusiasts. Just like the classic placeholder text, ‘Lorem Ipsum,’ which represents the blend of structure and creativity, we embody that spirit by crafting innovative solutions that balance form and function. We thrive on inventing and building with a strong creative vision, ensuring that optimization, security, and usability are always non-negotiable."
              buttonText="LER MAIS"
              titleColor="text-lime-600"
              buttonColor="bg-lime-600"
              subtitleColor="text-red-500"
            />
            <div className="flex justify-center items-center w-1/2">
              <img
                src="src/img/arara.jpg"
                className="w-64 h-96 border-4 border-white top-1 right-4"
                alt="arara"
              />
            </div>
          </div>
        </section>

        <section className="py-4">
          <div className="flex justify-center h-[500px] ">
            <div className="flex justify-center items-center w-1/2 ">
              <img
                src="src/img/arara.jpg"
                className="w-64 h-96 border-4 border-white top-1 right-4"
                alt="arara"
              />
            </div>

            <TextDefault
              title="Sanfonas"
              subtitle="O som do coração"
              text="At Lorem Ipsum, our team is a diverse mix of creatives, tinkerers,
            developers, designers, hackers, and tech enthusiasts. Just like the
            classic placeholder text, ‘Lorem Ipsum,’ which represents the blend
            of structure and creativity, we embody that spirit by crafting
            innovative solutions that balance form and function. We thrive on
            inventing and building with a strong creative vision, ensuring that
            optimization, security, and usability are always non-negotiable."
              buttonText="LER MAIS"
              buttonColor="bg-lime-600"
              titleColor="text-lime-600"
              subtitleColor="text-red-500"
            />
          </div>
        </section>
        <section className="py-4">
          <div className=" flex justify-center h-[500px] px-7">
            <ThirdTextDefault
              title="Bodegas"
              subtitle="radição & resiliência"
              text=" At Lorem Ipsum, our team is a diverse mix of creatives, tinkerers,
            developers, designers, hackers, and tech enthusiasts. Just like the
            classic placeholder text, ‘Lorem Ipsum,’ which represents the blend
            of structure and creativity, we embody that spirit by crafting
            innovative solutions that balance form and function. We thrive on
            inventing and building with a strong creative vision, ensuring that
            optimization, security, and usability are always non-negotiable."
              buttonText="LER MAIS"
              buttonColor="bg-lime-600"
              titleColor="text-lime-600"
              subtitleColor="text-red-500"
            />
            <div className="flex justify-center items-center w-1/2 ">
              <img
                src="src/img/arara.jpg"
                className="w-64 h-96 border-4 border-white top-1 right-4"
                alt="arara"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center">
            <button className="flex justify-center py-6 px-32 text-3xl text-amber-50 bg-blue-900 ">
              Ver todas as matérias
            </button>
          </div>
        </section>
        {/* outras materias */}
        <section>
          <div className="grid grid-cols-3">
            <div>
              <img src="src/img/arara.jpg" className="w-60 h-40" alt="arara" />
              <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
              <button>Acessar</button>
            </div>
            <div>
              <img src="src/img/arara.jpg" className="w-60 h-40" alt="arara" />
              <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
              <button>Acessar</button>
            </div>
            <div>
              <img src="src/img/arara.jpg" className="w-60 h-40" alt="arara" />
              <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
              <button>Acessar</button>
            </div>
            <div>
              <img src="src/img/arara.jpg" className="w-60 h-40" alt="arara" />
              <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
              <button>Acessar</button>
            </div>
            <div>
              <img src="src/img/arara.jpg" className="w-60 h-40" alt="arara" />
              <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
              <button>Acessar</button>
            </div>
            <div>
              <img src="src/img/arara.jpg" className="w-60 h-40" alt="arara" />
              <p>At Lorem Ipsum, our team is a diverse mix of creatives</p>
              <button>Acessar</button>
            </div>
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
