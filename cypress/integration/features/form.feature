Feature: Abrir o site na home

Background: Página inicial do Site
    Given que eu acesso a pagina inicial do site de Automação

Scenario: Criar um novo usuário no site
    And preencho o formulário para cadastrar um novo usuário
    When finalizar o cadastro
    Then devo visualizar a mensagem que o usuário foi cadastrado com sucesso