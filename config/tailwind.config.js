module.exports = {
  content: [
    "./public/*.html",
    // "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.erb",
    "./app/concepts/**/*.erb",
    "./app/controllers/views_controller.rb",
    "./app/concepts/cms/*.rb", // config.rb
    "section/**/*.erb",
  ],
  plugins: [
    require("@tailwindcss/forms")
  ]
}
