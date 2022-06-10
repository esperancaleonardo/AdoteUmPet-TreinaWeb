from rest_framework import serializers

from .models import Adoption
from pet.serializers import PetSerializer
from pet.models import Pet


class AdoptionSerializer(serializers.ModelSerializer):
    pet = PetSerializer(many=False, read_only=True)
    pet_id = serializers.PrimaryKeyRelatedField(
        many=False, write_only=True, queryset=Pet.objects.all()
    )

    class Meta:
        model = Adoption
        fields = ("id", "value", "email", "pet", "pet_id")

    def create(self, validated_data):
        validated_data["pet"] = validated_data.pop("pet_id")
        return super().create(validated_data)

    @staticmethod
    def validate_value(value):
        if value < 10:
            raise serializers.ValidationError(
                "O valor de doação deve ser maior que R$10,00"
            )

        if value > 300:
            raise serializers.ValidationError(
                "O valor de doação deve ser menor que R$300,00"
            )

        return value
