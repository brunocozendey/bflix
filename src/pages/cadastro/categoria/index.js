import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PagesDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function inputHandler(infoInput) {
    setValue(
      infoInput.target.getAttribute('name'),
      infoInput.target.value,
    );
  }

  useEffect(() => {
    console.log('Hello');
    const URL = 'http://localhost:5000/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias ([
          ...resposta,
        ]);
      });
  //   setTimeout(() => {
  //     setCategorias([
  //       ...categorias,
  //       {
  //         id: 1,
  //         nome: 'Front End',
  //         descricao: 'Uma categoria show',
  //         cor: '#cbd1ff',
  //       },
  //       {
  //         id: 2,
  //         nome: 'Back End',
  //         descricao: 'Outra categoria show',
  //         cor: '#cbd1ff',
  //       },
  //     ]);
  //   }, 4 * 1000);
  }, []);

  return (
    <PageDefault>

      <h1>
        Cadastro de Categoria:
        {' '}
        { values.nome }
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={inputHandler}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={inputHandler}
        />
        {/* <div>

                        <label>
                            Descrição:
                            <textarea type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={ inputHandler }
                            />
                        </label>
                    </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={inputHandler}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            { categoria.nome }
          </li>
        ))}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PageDefault>

  );
}

export default CadastroCategoria;
