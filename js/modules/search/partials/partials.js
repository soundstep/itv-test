define([], function() {

    'use strict';

    var partials = {};

    partials["partials/search.tpl.html"] = "<h1>Search</h1>\n" +
        "<div>\n" +
        "    <input class=\"search-input\" autofocus placeholder=\"Search terms\" type=\"text\"/>\n" +
        "</div>\n" +
        "<div class=\"search-result data-cloak\">\n" +
        "    <h2>Number of item found: {{results.length}}</h2>\n" +
        "    <table class=\"table table-condensed table-striped table-bordered data-cloak\" data-show=\"{{results.length}}\">\n" +
        "        <thead>\n" +
        "        <tr>\n" +
        "            <th>Image</th>\n" +
        "            <th>Title</th>\n" +
        "            <th>Channel</th>\n" +
        "            <th>Most Recent Episode</th>\n" +
        "            <th>Synopsis</th>\n" +
        "        </tr>\n" +
        "        </thead>\n" +
        "        <tbody>\n" +
        "            <tr data-repeat=\"item in results\">\n" +
        "                <td><img data-src=\"{{item.Programme.ImageUri}}\" width=\"145\" height=\"88\" alt=\"{{item.Programme.Programme.Title}}\"/></td>\n" +
        "                <td>\n" +
        "                    <div data-hide=\"{{hasContentUrl(item)}}\">{{item.Programme.Programme.Title}}</div>\n" +
        "                    <div data-show=\"{{hasContentUrl(item)}}\"><a data-href=\"{{item.Programme.AddtionalContentUri}}\" target=\"_blank\">{{item.Programme.Programme.Title}}</a></div>\n" +
        "                </td>\n" +
        "                <td>{{item.Programme.Channel.Name}}</td>\n" +
        "                <td>{{formatDate(item.Programme.MostRecentEpisode)}}</td>\n" +
        "                <td>{{item.Programme.ShortSynopsis}}</td>\n" +
        "            </tr>\n" +
        "        </tbody>\n" +
        "    </table>\n" +
        "</div>\n" +
        "";

    return partials;

});