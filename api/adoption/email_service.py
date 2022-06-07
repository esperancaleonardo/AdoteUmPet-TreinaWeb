from django.core.mail import send_mail


def send_confirmation_mail(adoption):

    subject='Adoção realizada com sucesso!!'
    content=f'Parabéns, você realizou a adoção virtual do '\
            f'pet {adoption.pet.name} e ajudou ele a ter '\
            f'uma vida mais saudável e repleta de amor e '\
            f'carinho!!!! Sua doação foi de R$ {adoption.value} reais.'
    sender='leonardo.oliveira.esperanca@gmail.com'
    recipient=[adoption.email]

    send_mail(subject, content, sender, recipient)
    print('Email enviado com sucesso!')