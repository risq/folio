# folio

```bash
dokku apps:create valentinledrapier.com

dokku config:set valentinledrapier.com \
  DOKKU_LETSENCRYPT_EMAIL=<email> \
  GHOST_URL=https://valentinledrapier.com \
  MAIL_FROM='"Folio Ghost Blog" <folio@valentinledrapier.com>'  \
  MAIL_HOST=mail.valentinledrapier.com

dokku storage:mount valentinledrapier.com /data/folio/data:/var/lib/ghost/data
dokku storage:mount valentinledrapier.com /data/folio/images:/var/lib/ghost/images

# Push to dokku remote, then:
dokku letsencrypt valentinledrapier.com
```
