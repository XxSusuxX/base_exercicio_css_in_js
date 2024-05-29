import { FormEvent, useState } from "react";

import { EstiloBtnPesquisar, EstiloCampo, EstiloForm } from "./style";

type Props = {
  aoPesquisar: (termo: string) => void;
};

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>("");

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <EstiloForm onSubmit={aoEnviarForm}>
      <EstiloCampo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <EstiloBtnPesquisar type="submit">Pesquisar</EstiloBtnPesquisar>
    </EstiloForm>
  );
};
export default FormVagas;
