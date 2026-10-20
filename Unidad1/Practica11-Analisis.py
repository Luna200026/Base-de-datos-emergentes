from pathlib import Path
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt


def main():
    archivos = sorted(Path('.').glob('Practica11-metricas-*.csv'))
    if not archivos:
        raise FileNotFoundError('Primero ejecute Practica11-Mediciones.py.')
    df = pd.concat([pd.read_csv(ruta) for ruta in archivos], ignore_index=True)
    df.to_csv('Practica11-metricas.csv', index=False, encoding='utf-8-sig')
    print('Escalas analizadas:', sorted(df['registros'].unique().tolist()))
    print(df.groupby(['registros', 'consulta', 'indice'])['mediana_ms'].median())

    for valor, archivo, titulo, ylabel in [
        ('mediana_ms', 'Practica11-latencia.png', 'Latencia de consultas', 'Mediana (ms)'),
        ('docs_examined', 'Practica11-documentos-examinados.png', 'Documentos examinados', 'Documentos'),
    ]:
        tabla = df.pivot_table(index=['registros', 'consulta'], columns='indice', values=valor)
        ax = tabla.plot(kind='bar', figsize=(12, 6))
        ax.set_title(titulo)
        ax.set_xlabel('Escala y consulta')
        ax.set_ylabel(ylabel)
        plt.xticks(rotation=55, ha='right')
        plt.tight_layout()
        plt.savefig(archivo, dpi=180)
        plt.close()
        print('Grafica generada:', archivo)


if __name__ == '__main__':
    main()


# Ejercicio 13
# Practica11-latencia.png: sin índice, la mediana crece conforme aumenta la escala porque MongoDB
# recorre toda la colección; con índice se mantiene baja en venta_id, cliente_estado y sku.
# La consulta por fecha devuelve muchos documentos (todas las ventas desde 2026), por eso el índice
# la mejora menos.
# Practica11-documentos-examinados.png: sin índice, docs_examined es igual al total de registros
# en cada escala; con índice baja a casi lo mismo que nReturned.
