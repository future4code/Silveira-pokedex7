export const goToPokeHome = (Navigate) => {
    Navigate("/");
};

export const goToPokeDetalhes = (Navigate, name, isPokedex) => {
    console.log("ispoke", isPokedex);
    isPokedex
    ? Navigate(`/pokemon/${name}/BackPokedex`)
    : Navigate(`/pokemon/${name}/BackPokedex`);
};
  
export const goToPokedex = (Navigate) => {
    Navigate("/pokedex");
};