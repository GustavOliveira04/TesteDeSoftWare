alturas = []

while True:
    entrada = input("Digite a altura da pessoa ou 'sair' para encerrar: ")
    if entrada.lower() == 'sair':
        break
    try:
        altura = float(entrada)
        if altura > 0:
            alturas.append(altura)
        else:
            print("A altura deve ser um número maior que zero")
    except ValueError:
        print("Digite um número válido ou 'sair' para encerrar")

    if len(alturas) > 0:
        menor_altura = min(alturas)
        maior_altura = max(alturas)
        media_altura = sum(alturas) / len(alturas)

        abaixo_media = len([a for a in alturas if a < media_altura])
        acima_media = len([a for a in alturas if a > media_altura])

        percentual_abaixo = (abaixo_media / len(alturas)) * 100
        percentual_acima = (acima_media / len(alturas)) * 100

        print(f"Menor altura: {menor_altura:.2f}m")
        print(f"Maior altura: {maior_altura:.2f}m")
        print(f"Média das alturas: {media_altura:.2f}m")
        print(f"Percentual de pessoas abaixo da média: {percentual_abaixo:.2f}%")
        print(f"Percentual de pessoas acima da média: {percentual_acima:.2f}%")

    else:
        print("\nNenhuma altura foi inserida.")