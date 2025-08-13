import Header from "./components/Header";
import Logo from "./components/Logo";
import ReadMoreComponent from "./components/ReadMoreComponent";
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
        <section className="py-4">
          <div className="flex justify-center">
            <button className="flex justify-center py-6 px-32 text-3xl text-amber-50 bg-blue-900 ">
              Ver todas as matérias
            </button>
          </div>
        </section>
        {/* outras materias */}
        <section className="grid place-items-center py-3">
          <div
            className=" flex px-12 py-4 bg-amber-200 
           w-[1000px]"
          >
            <div className="grid grid-cols-3 ">
              {Array.from({ length: 6 }, (_, index) => index + 1).map((a) => (
                <ReadMoreComponent key={a} />
              ))}
            </div>
          </div>
        </section>
        {/* Audiovisual */}
        <section>
          <div className="flex justify-end py-4 pr-96">
            <h3 className=" flex items-center justify-end  px-4 pb-3 w-64 h-16 bg-amber-400 font-extrabold text-amber-50">
              Audiovisual
            </h3>
          </div>
        </section>
        <section>
          <div className="flex items-center bg-red-100">
            <div className="flex flex-1 p-8">
              <iframe
                className="aspect-video"
                src="https://www.youtube.com/embed/watch?v=mjsJzKry6E0&list=PLGBKsNyGY-aeXMxANmBPGi0tL-eiWPkMf&index=21"
              ></iframe>
            </div>
            <div className="flex flex-1 justify-center ">
              <TextDefault
                subtitle="Elas são donas do negócio"
                text=" At Lorem Ipsum, our team is a diverse mix of creatives,
                tinkerers, developers, designers, hackers, and tech enthusiasts.
                Just like the classic placeholder text, ‘Lorem Ipsum,’ which
                represents the blend of structure and creativity, we embody that
                spirit by crafting innovative solutions that balance form and
                function. We thrive on inventing and building with a strong
                creative vision, ensuring that optimization, security, and
                usability are always non-negotiable."
              />
            </div>
          </div>
        </section>
      </main>
      <footer className=" py-4">
        <div className="bg-blue-900 pt-3 pb-8">
          <div className="flex">
            <div className="flex flex-1/3 items-center justify-center ml-5">
              <img
                src="src/img/redesSociais.png"
                className="h-24 w-48"
                alt="redes sociais"
              />
            </div>
            <div className="flex justify-center flex-1/3">
              <Logo divColor="bg-yellow-400" />
            </div>
            <div className="flex items-center">
              <p className="pr-20 flex-1/3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente necessitatibus,
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
