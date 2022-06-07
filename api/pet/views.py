from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView

from .models import Pet
from .serializers import PetSerializer

# Create your views here.


class PetList(APIView):
    def get(self, request, format=None):
        pets = Pet.objects.all()
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request, format=None):
        serializer = PetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=HTTP_200_OK)

        return Response(
            {
                "message": "Erro na validação da criação do Pet",
                "errors": serializer.errors,
            },
            status=HTTP_400_BAD_REQUEST,
        )