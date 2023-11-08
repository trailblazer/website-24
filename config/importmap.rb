# Pin npm packages by running ./bin/importmap

pin_all_from "app/javascript"

pin "application", preload: true
pin "anchor-js", preload: true # @5.0.0
pin "highlight.js/lib/core", to: "highlight.js--lib--core.js" # @11.8.0
pin "highlight.js/lib/languages/ruby", to: "highlight.js--lib--languages--ruby.js" # @11.8.0
pin "jquery" # @3.7.1
pin "jquery.parallax-scroll"
pin "@docsearch/js", to: "docsearch@3.js" # @3.5.2
