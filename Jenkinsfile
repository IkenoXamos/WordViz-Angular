pipeline {
  agent {
    docker {
      image 'node:10-alpine'
    }

  }
  stages {
    stage('Install Packages') {
      steps {
        sh '''cd WordViz
npm install'''
      }
    }
    stage('Test and Build') {
      steps {
        sh '''cd WordViz
npm run build'''
      }
    }
    stage('Deployment') {
      steps {
        withAWS(region:'us-east-2',credentials:ACCESS_ID) {
          s3Delete(path: '**/*', bucket: 'arn:aws:s3:::project1-angular-build')
          s3Upload(bucket: 'arn:aws:s3:::project1-angular-build', includePathPattern: '**/*', workingDir: 'build')
        }
      }
    }
  }
  environment {
    HOME = '.'
    ACCESS_ID = "${env.JENKINS_ACCESS_ID}"
  }
}
