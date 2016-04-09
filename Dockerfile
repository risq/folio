FROM ghost

MAINTAINER Valentin Ledrapier <valentin.ledrapier@gmail.com>

ADD config.example.js config.example.js
ADD theme $GHOST_SOURCE/content/themes/custom
ADD nginx.conf.sigil .

WORKDIR $GHOST_SOURCE/content/themes/custom

RUN npm install && npm run build

WORKDIR $GHOST_SOURCE

# Fix ownership in src
RUN chown -R user $GHOST_SOURCE/content

EXPOSE 2368
