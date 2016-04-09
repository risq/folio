# folio

```bash
dokku apps:create ghost
dokku config:set ghost GHOST_URL=http://valentinledrapier.com MAIL_FROM='"Ghost" <ghost@valentinledrapier.com>' MAIL_HOST=mail.valentinledrapier.com
dokku storage:mount ghost /data/ghost/data:/var/lib/ghost/data
dokku storage:mount ghost /data/ghost/images:/var/lib/ghost/images
```
