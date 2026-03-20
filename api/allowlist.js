export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { sheet } = req.query;

  const urls = {
    gtdSpecial: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7jI3bC6kbxpOeTXIRu0AaLgZZ70OqtAE7r1iBJpvQSd8BpYE6BkRc1mUHUSn4ptLfiGc9RICMJPH8/pub?output=csv",
    gtdCollab: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmr8zVtO-gM6IvjikyrCHmBii60UbHRxMZpwlGLEyHhNc5XREW9U1NZVMnLrLF1kbtSZ5lMbS0vFGa/pub?output=csv",
    wlFCFS: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQAq2JR19xkb33ut565dDU9g9ZUcn40aBipQdiO-e7C4qcULX01vlwNLeAHhVhz2yuHfdMtP_WMEK3b/pub?output=csv",
  };

  if (!urls[sheet]) return res.status(400).json({ error: "Invalid sheet" });

  const response = await fetch(urls[sheet]);
  const text = await response.text();
  res.status(200).send(text);
}
