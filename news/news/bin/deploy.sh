set -eu

main() {
    git config --global user.email "travis@travis-ci.org"
    git config --global user.name "Travis CI"
    git clone https://${GITHUB_TOKEN}@github.com/nickw444/100-warm-tunas.git
    cp -r _site/news/ 100-warm-tunas/news/

    cd 100-warm-tunas
    git add news/
    git commit -m "news: build ${TRAVIS_BUILD_NUMBER}: ${TRAVIS_COMMIT_MESSAGE}"
    git push origin master
}

main
