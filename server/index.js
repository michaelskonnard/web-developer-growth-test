const http = require("http");
const url = require("url");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 4000;

const payload = JSON.parse(
  fs.readFileSync("./server/payload.json", { encoding: "utf8" })
);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Max-Age", 2592000);

  const parsedUrl = url.parse(req.url, true);
  const locale = parsedUrl.query.locale;

  let data;

  if (req.url.startsWith("/global")) {
    data = filterByLocale(payload.global, locale)[0];
  }

  if (req.url.startsWith("/pages")) {
    const slug = parsedUrl.query.slug;

    if (slug) {
      data = findBySlug(payload.pages, locale || "en", slug);
    } else {
      data = locale ? filterByLocale(payload.pages, locale) : payload.pages;
    }
  }

  if (!data) {
    res.statusCode = 404;
    data = { message: "Not found" };
  }

  res.end(JSON.stringify(data));
});

const filterByLocale = (data, locale) => {
  return data.filter((item) => item.locale === locale);
};

const findBySlug = (data, locale, slug) => {
  return data.find((item) => item.locale === locale && item.slug === slug);
};

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
