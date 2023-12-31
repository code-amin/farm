const Prix = () => {
  return (
    <>
      <div className="p-2 sm:p-4  grid ">
        <a
          href="/"
          className="border-gray-500 w-[100px] 	border-2 py-3 right-0 font-medium text-sm justify-center flex  mr-6 mt-16 transition duration-300 ease-in-out hover:scale-110"
        >
          ⏎ Retour{" "}
        </a>
        <p className="sm:text-3xl underline py-3">Le prix</p>
        <p className="text-lg">
          Il comprend les terrains (34 ha), les logis (accueil) et celui du
          berger (collé à la bergerie. Les outils aratoires (tracteur, chariot,
          citerne, billonneur, cover Crop et le chesel, etc... <br />
          Les dernières transactions ont été conclues au prix de 170 000 MAD/ha
          dans un cas (voisin), et de{" "}
          <span className="inline-block">400 000 MAD/ha</span>, dans un autre.{" "}
          <br />
          Pour avoir une i dée sur le marché, il est possible de consulter
          DGT(enregistrement) ou la Conservation foncière. Ces organismes
          compilent les transactions zone par zone (Zoning) et appliquent un
          prix moyen des 3 derniers mois. Considérant l’objet à vendre, il faut
          compter <span className="inline-block">300 000 MAD l’HA.</span> <br />
          Des questions? Contactez nous. <br />
          Merci!
        </p>
        <button className="transition duration-300 ease-in-out hover:scale-110 contact text-center  text-white py-3 right-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-medium text-sm pt-5 mr-6 mt-2 sm:mt-16 ">
          <a href="mailto:rouif401@gmail.com?subject=Demande d'information - Ferme">
            Communiquez avec nous
          </a>
        </button>
      </div>
    </>
  );
};

export default Prix;
 