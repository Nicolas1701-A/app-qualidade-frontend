export const aplicarDesconto = (valorTotal, cupom) => {
    if (valorTotal <= 0) return 0;
    if (cupom === 'PROMO10') return valorTotal * 0.90;
    if (cupom === 'PROMO20') return valorTotal * 0.80;
    return valorTotal;
    };