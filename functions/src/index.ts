import { renderizarMenu } from "./render/menu";
import { renderizarTopo } from "./render/topo";
import { renderFooter } from "./render/footer";
import { listarImagens } from "./imagens/imagens";

export const render = {
  menu: renderizarMenu,
  topo: renderizarTopo,
  footer: renderFooter
};
export const imagens = { listar: listarImagens };
