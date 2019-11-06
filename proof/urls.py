from django.conf.urls import url

from proof.views import HomePage

urlpatterns = [
    url(r'^.*$', HomePage.as_view(), name='homepage'),
]
