import flet as ft

def main(pagina: ft.Page):
    pagina.title = "Meu app flet"
    pagina.vertical_alignment = ft.MainAxisAlignment.CENTER

    def diminuir(e):
        caixa_texto.value = str(int(caixa_texto.value) - 1)
        pagina.update()

    def somar(e):
        caixa_texto.value = str(int(caixa_texto.value) + 1)
        pagina.update()

    # criar os itens que queremos na página
    botao_menos = ft.IconButton(ft.icons.REMOVE, on_click=diminuir)
    caixa_texto = ft.TextField(value="0", width=100, text_align=ft.TextAlign.CENTER)
    botao_mais = ft.IconButton(ft.icons.ADD, on_click=somar)

    # adicinar os itens na página
    pagina.add(
        ft.Row([botao_menos, caixa_texto, botao_mais], alignment=ft.MainAxisAlignment.CENTER)
    )

ft.app(target=main, view=ft.WEB_BROWSER)