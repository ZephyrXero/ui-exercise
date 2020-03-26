export default function unHtml(htmlString) {
  const tempDoc = new DOMParser().parseFromString(htmlString, 'text/html');
  return tempDoc.body.textContent || '';
}
