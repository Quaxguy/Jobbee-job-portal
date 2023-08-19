#serializers allows you to convert data types such as query sets into json objects for better visualization

from rest_framework import serializers
from .models import Job,CandidatesApplied


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields ='__all__'


# This defines a JobSerializer using the Django Rest Framework serializers module.
# It allows converting Job model instances to JSON for API usage.
# Import serializers from rest_framework
# Import the Job model
# Create a JobSerializer class that extends ModelSerializer
# Include a Meta class that specifies: # model = Job - The model class being serialized , # fields = 'all' - Serialize all model fields     

class CandidatesAppliedSerializer(serializers.ModelSerializer):

    job = JobSerializer()

    class Meta:
        model = CandidatesApplied
        fields = ('user', 'resume', 'appliedAt', 'job')   