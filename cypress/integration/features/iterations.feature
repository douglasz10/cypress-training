Feature: Arrastar e soltar a imagem

Background: Página inicial do Site
    Given que eu acesso a pagina inicial do site de Automação

Scenario: Arrastar e soltar a imagem no local correto
    And acesso a tela para Drag and Drop
    When segurar e arrastar a imagem
    Then devo visualizar a imagem no local correto