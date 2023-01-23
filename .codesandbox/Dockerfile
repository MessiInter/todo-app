FROM node

WORKDIR /workspace

RUN rm -f ~/.{zsh_history,bash_history} > /dev/null 2>/dev/null

RUN apt-get update

RUN apt-get upgrade -y

ENV NG_CLI_ANALYTICS=false


ENV NODE_ENV=development

RUN npm install -g @angular/cli