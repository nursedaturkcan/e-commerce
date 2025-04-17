export const discountRate = (originalPrice: string, salePrice: string): number => {
    const original = parseFloat(originalPrice.replace(/[^0-9.]/g, ""));
    const sale = parseFloat(salePrice.replace(/[^0-9.]/g, ""));
  
    if (isNaN(original) || isNaN(sale) || original <= 0 || sale >= original) {
      return 0;
    }
  
    const discount = ((original - sale) / original) * 100;
    return Math.round(discount);
  };
 export const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-EN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };
  